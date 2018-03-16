import { Component, OnInit, Inject } from '@angular/core';
import { ProjectInformation } from '../project-information';
import { ProjectFetcherService } from '../project-fetcher.service';
import { AuthenGuardService } from '../authen-guard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public projects: ProjectInformation[]
  
  private localStorage = window.localStorage

  constructor(
    private projectService: ProjectFetcherService,
    private authGuardService: AuthenGuardService
	) { }

  ngOnInit() {
		this.fetchProjectInformation()
  }

	fetchProjectInformation(): void {
		this.projectService.availableProject()
			.subscribe(projects => this.projects = projects)
	}

}
