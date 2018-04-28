import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { ProjectDashboardComponent } from '../project-dashboard/project-dashboard.component';
import { Project } from '../project.entity';

interface MenuAction {
  title: string;
  route: string;
}

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent {

  project;

  projectTitle: string;

  dashboardMessage: string;
  settingsMessage: string;

  constructor(
    private route: ActivatedRoute,
    private af: AngularFireAuth,
    private afs: AngularFirestore
  ) { 
    console.log(this.route.component)
    this.route.params.subscribe(p => {
      this.projectTitle = p.pid;
      this.afs.collection('projects', ref => {
        return ref.where('slug', '==', 'hello-world')
      }).valueChanges().subscribe(p => {
        this.project = p.pop()
      })
    })
  }

  projectMenuLinkNav(event: any) {
    console.log(event)
  }

}
