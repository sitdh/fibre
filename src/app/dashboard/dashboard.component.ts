import { Component, OnInit, Inject } from '@angular/core';
import { ProjectInformation } from '../project-information';
import { ProjectFetcherService } from '../project-fetcher.service';
import { AuthenGuardService } from '../authen-guard.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public projects: ProjectInformation[]

  private localStorage = window.localStorage

  user: Observable<firebase.User>

  authState: any = null

  constructor(
    private location: Location,
    private af: AngularFireAuth,
    private route: Router,
    private projectService: ProjectFetcherService,
    ag: AuthenGuardService
  ) {
    ag.currentObservedUser().subscribe(u => {
      if (null == u) {
        route.navigate(['/create/new'])
      }
    })
  }

  ngOnInit() {
  }

	fetchProjectInformation(): void {
		this.projectService.availableProject()
			.subscribe(projects => this.projects = projects)
	}

}
