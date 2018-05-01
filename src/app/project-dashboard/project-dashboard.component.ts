import { Component, ViewChild, OnInit, 
  Inject, Input, EventEmitter,
  Output
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { JenkinsSettingsDialogComponent } from '../jenkins-settings-dialog/jenkins-settings-dialog.component';
import { JenkinsBuildService } from '../jenkins-build.service';
import { ProjectFetcherService } from '../project-fetcher.service';
import { JenkinsConfiguration } from '../jenkins-configuration.entity';
import { Project } from '../project.entity';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  projectInfo: Project
  _projectInfo = null

  @Output('jenkinsconfig') jenkinsConfig = new EventEmitter<JenkinsConfiguration>();

	name: string;
  message: string;
	animal: string;

  jenkinsStatus = 'jenkins-fire'

  displayedColumns = ['buildNumb', 'startDate']
  buildDataSource = new MatTableDataSource<BuildInfo>(BUILD_INFO)

  userConfigJenkins: JenkinsConfiguration

  constructor(
    private http: HttpClient,
    private jenkins: JenkinsBuildService,
		private settingDialog: MatDialog,
		private projectFetcher: ProjectFetcherService 
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.buildDataSource.paginator = this.paginator;
  }

	openJenkinsSettingDialog(): void {
		let dialogRef = this.settingDialog.open(JenkinsSettingsDialogComponent, {
			width: '550px',
      data: { 
        jenkins_config: this.userConfigJenkins, 
        jenkins_build: this.jenkins 
      }
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('Dialog was closed')
      console.log(result)
		})
	}

  @Input('project')
  set projectInformation(project: Project) {
    if (null != project) this.fetchJenkinsConnectionStatus( project )
  }

  fetchJenkinsConnectionStatus(projectInfo: Project) {
    this.jenkins.isJenkinsServerSetup(projectInfo).subscribe(p => {
       
      if(p.length == 1) {
        this.jenkinsStatus = 'jenkins' 
        this.userConfigJenkins = p.pop()
      } else {
        this.userConfigJenkins = {
          project: projectInfo.project_name,
          project_slug: projectInfo.slug,
          server: '',
          username: '',
          password: '',
          jobsname: projectInfo.slug
        }
      }
    })
  }
}

export interface BuildInfo {
  buildNumb: number;
  buildStatus: string;
  startDate: Date;
}

const BUILD_INFO: BuildInfo[] = [
  { buildNumb: 1, buildStatus: 'fail', startDate: new Date() },
  { buildNumb: 2, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 3, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 4, buildStatus: 'fail', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', startDate: new Date() },
]
