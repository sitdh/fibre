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

  saveJenkinsConfiguration(config: JenkinsConfiguration) {
    var uid = this.ag.createId()
    console.log(uid)
  }

  requestForServerConfig(jenkinsConfig: JenkinsConfiguration): Observable<any> {
    const jenkinsServer = jenkinsConfig.server + '/api/xml';
    const credential = btoa(jenkinsConfig.username + ':' + jenkinsConfig.password)
		const headersOptions = new HttpHeaders({
			'Authorization': 'Basic ' + credential,
			'Content-Type': 'application/xml'
		})
		
		return this.http.get(
			jenkinsServer, 
			{ headers: headersOptions, responseType: 'text' }
		)
  }

}
