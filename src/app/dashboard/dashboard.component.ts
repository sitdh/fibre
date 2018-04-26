import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, keyframes, animate, transition, style } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { ProjectInformation } from '../project-information';
import { ProjectFetcherService } from '../project-fetcher.service';
import { AuthenGuardService } from '../authen-guard.service';
import { Project } from '../project.entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: []
})
export class DashboardComponent {

  user: Observable<firebase.User>;

  authState: any;

  projectCollection;
  projects = [];

  constructor(
    private location: Location,
    private af: AngularFireAuth,
    private route: Router,
    private projectService: ProjectFetcherService,
    db: AngularFirestore,
    ag: AuthenGuardService
  ) {
    ag.currentObservedUser().subscribe(u => {
      if (null == u) 
        route.navigate(['/account/new'])

      this.projectCollection = db.collection('/projects').doc(u.uid).collection('/repo')
      this.projectCollection.valueChanges().subscribe(ps => {
        this.projects = ps == null ? [] : ps ;
      })
    })

  }

  featureTour() {
    return false;
  }

  newProject() {
    this.route.navigate(['/project/new'])
  }

  openProject(p) {
    this.route.navigate([p])
  }

}
