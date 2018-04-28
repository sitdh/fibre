import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { AuthenGuardService } from '../authen-guard.service';
import { Project } from '../project.entity';
import { UserMeta } from '../user-meta.entity';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {

  project: Project

  projectTitle: string

  currentUser: firebase.UserInfo 

  constructor(
    private route: ActivatedRoute,
    private af: AngularFireAuth,
    private afs: AngularFirestore,
    private ag: AuthenGuardService
  ) { 
    this.ag.currentObservedUser().subscribe(u => {
      this.currentUser = u
      this.fetchingProjectInformation(u)
    })
  }

  ngOnInit() {
  }

  fetchingProjectInformation(user) {
    var q = this.afs.collection('projects', ref => {
      return ref.where('slug', '==', 'hello-world').where('owner', '==', user.uid)
    })
    console.log(q)
    q.valueChanges().subscribe(p => {
      this.project = p.pop()
    })
  }

}
