import { AfterViewInit, OnInit, Component, 
  ViewChildren, forwardRef, QueryList
} from '@angular/core';
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

  currentSection: string;

  @ViewChildren(ProjectDashboardComponent) dashboardComponent: QueryList<ProjectDashboardComponent>;

  constructor(
    private route: ActivatedRoute,
    private af: AngularFireAuth,
    private afs: AngularFirestore,
		private dialog: MatDialog 
  ) { 
    this.route.params.subscribe(p => {
      this.projectTitle = p.pid
      this.currentSection = p.section

      this.afs.collection('projects', ref => {
        return ref.where('slug', '==', p.pid)
      }).valueChanges().subscribe(p => {
        this.project = p.pop()
      })
    })

  }

	ngOnInit() { }

	ngAfterViewInit() {
		this.setupLink()
	}

  projectMenuLinkNav(event: any) {
    this.clearElement(event.srcElement)
  }

  syncProjectInformation(event: any) {
  }

  rebuildProject(event: any) {
  }

	setupLink() {
    this.deactivateElement()

    var href = window.location.href.split('#')[1].split('/')[3]
		var element = null
		if ('settins' == href) {
			element = document.querySelector('#projsettings')
		} else if (href.endsWith('dashboard')) {
			element = document.querySelector('#projnav')
		}

    this.activateElement(element)
	}

  public isCurrentComponent(tag: string): boolean {
    var compareResult = false

    if (window.location.href.split('#')[1].split('/').length > 4) {
      compareResult = window.location.href.endsWith(tag)
    } else {
      compareResult = this.currentSection == tag
    }
    return compareResult
  }

  jenkinsConfiguUpdate(event: any): void {
    console.log(event)
  }

  clearElement(element: any) {
    this.deactivateElement()
    this.activateElement(element)
  }

  private deactivateElement() {
    let navElements = document.querySelectorAll('.nav-link')
    for(var i = 0; i < navElements.length; i++) { navElements[i].classList.remove('activate') }
  }

  private activateElement(element: any) {
    element.classList.add('activate')
  }
}
