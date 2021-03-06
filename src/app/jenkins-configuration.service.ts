import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { JenkinsConfiguration } from './jenkins-configuration.entity';

@Injectable()
export class JenkinsConfigurationService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  findConfigurationForProjectId(pid: string): Observable<JenkinsConfiguration> {
    var jenkinsConfRef = this.afs.collection<JenkinsConfiguration>('jenkinsconf', ref => {
      return ref.where('project', '==', pid).limit(1)
    })
    return jenkinsConfRef.valueChanges()
  }

}
