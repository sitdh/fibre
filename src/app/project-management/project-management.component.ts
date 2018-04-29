import { AfterViewInit, OnInit, Component, ViewChild, forwardRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as firebase from 'firebase/app';

import { ProjectDashboardComponent } from '../project-dashboard/project-dashboard.component';
import { ProjectSettingComponent } from '../project-setting/project-setting.component';
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
export class ProjectManagementComponent implements OnInit, AfterViewInit {
	name: string;
	animal: string;

  project: any;
  projectTitle: string;
	message: string;

  constructor(
    private route: ActivatedRoute,
    private af: AngularFireAuth,
    private afs: AngularFirestore,
		private dialog: MatDialog 
  ) { 
    this.route.params.subscribe(p => {
      this.projectTitle = p.pid;
      this.afs.collection('projects', ref => {
        return ref.where('slug', '==', 'hello-world')
      }).valueChanges().subscribe(p => {
        this.project = p.pop()
      })
    })
  }

	ngOnInit() { 
		this.setupLink()
	}

	ngAfterViewInit() {
		this.setupLink()
	}

  projectMenuLinkNav(event: any) {
		angular.element(document.querySelectorAll('.nav-link')).removeClass('activate')
		angular.element(event.srcElement).addClass('activate')
  }

  syncProjectInformation(event: any) {
  }

  rebuildProject(event: any) {
  }

	setupLink() {
		angular.element(document.querySelectorAll('.nav-link')).removeClass('activate')
		var href = window.location.href
		var element = null
		if (href.endsWith('settings')) {
			element = document.querySelector('#projsettings')
		} else if (href.endsWith('dashboard')) {
			element = document.querySelector('#projnav')
		}

		angular.element(element).addClass('activate')
	}

}
