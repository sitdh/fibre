import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { environment as env } from './../environments/environment';
import { Project } from './project.entity';
import { JenkinsConfiguration } from './jenkins-configuration.entity';
import { AuthenGuardService } from './authen-guard.service';

@Injectable()
export class JenkinsBuildService {

	jenkinsServer: string;
	userInfo: firebase.UserInfo;
	password: string;
  jenkinsConfigRef: any;
  jenkinsTemplateURL = '/assets/statics/templates/jenkins-blueocean.template'

  constructor(
    private http: HttpClient,
    private ag: AuthenGuardService,
    private db: AngularFirestore
  ) { 
    this.ag.currentObservedUser().subscribe(u => {
      if (null != u) this.userInfo = u;
    })
  }

  isJenkinsServerSetup(project: Project): Observable<JenkinsConfiguration[]> {
    this.jenkinsConfigRef = this.db.collection<JenkinsConfiguration>('jenkinsconf', ref => {
      return ref.where('project_slug', '==', project.slug) 
    })
    return this.jenkinsConfigRef.valueChanges()
  }

  saveJenkinsConfiguration(config: JenkinsConfiguration, uid) {
    config.uid = uid || this.db.createId()
    console.log(config.uid)
    return this.db.collection('jenkinsconf')
      .doc(config.uid)
      .set(config)
  }

  createJenkinsJobs(config: JenkinsConfiguration, template): Observable<string> {
    const createItem = `http://${config.server}/createItem?name=fibre-${config.jobsname}`
		return this.http.post(
			createItem, 
      template,
      { headers: this.authenticationHeader(config) }
		)
  }
  
  fetchJenkinsJobsTemplate(): Observable<string> {
    return this.http.get(
      this.jenkinsTemplateURL,
      { responseType: 'text' }
    )
  }

  requestForServerConfig(jenkinsConfig: JenkinsConfiguration): Observable<any> {
    const jenkinsServer = `http://${jenkinsConfig.server}/api/xml`;
		return this.http.get(
			jenkinsServer, 
			{ headers: this.authenticationHeader(jenkinsConfig), responseType: 'text' }
		)
  }

  forceJenkinsToBuild(jenkinsConfig: JenkinsConfiguration) {
  }

  private authenticationHeader(config: JenkinsConfiguration): HttpHeaders {
		const headersOptions = new HttpHeaders();
    return headersOptions
      .append('Authorization', 'Basic ' + btoa(`${config.username}:${config.password}`))
      .append('Content-Type', 'application/xml')
  }
}
