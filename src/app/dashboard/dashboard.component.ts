import { Component, OnInit } from '@angular/core';
import { ProjectInformation } from '../project-information';
import { ProjectFetcherService } from '../project-fetcher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public projects: ProjectInformation[]

  constructor(
		private projectService: ProjectFetcherService
	) { }

  ngOnInit() {
		this.fetchProjectInformation()
  }

	fetchProjectInformation(): void {
		this.projectService.availableProject()
			.subscribe(projects => this.projects = projects)
	}

}
