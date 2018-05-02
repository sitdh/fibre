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

  displayedColumns = ['buildNumb', 'buildStatus', 'startDate', 'duration']
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
        jenkins_jobs_uid: this.userConfigJenkins.uid, 
        project_uid: this.projectInfo.uid, 
        jenkins_config: this.userConfigJenkins, 
        jenkins_build: this.jenkins,
        project_repo: this.projectInfo.repo_ssh
      }
		})

    dialogRef.afterClosed().subscribe(result => {
      this.jenkins.fetchJenkinsJobsTemplate().subscribe(template => {
        template = template
          .replace('[jenkins-user]', result.jenkins_config.username)
          .replace('[project-git-remote]', result.project_repo)

        this.jenkins
          .createJenkinsJobs(result.jenkins_config, template)
          .subscribe(r => { if (null == r) console.log('Jobs was created') })
      })
    })
	}

  @Input('project')
  set projectInformation(project: Project) {
    if (null != project) this.fetchJenkinsConnectionStatus( project )
  }

  fetchJenkinsConnectionStatus(projectInfo: Project) {
    this.jenkins.isJenkinsServerSetup(projectInfo).subscribe(p => {
      this.projectInfo = projectInfo

      if(p.length == 1) {
        this.jenkinsStatus = 'jenkins' 
        this.userConfigJenkins = p.pop()
      } else {
        this.jenkinsStatus = 'jenkins-fire' 
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

  buildJenkinsProjectJob(event: any) {
    // this.jenkins.forceJenkinsToBuild()
  }

  rebuildProject(event: any) {
    // this.jenkins.createJenkinsJobs().subscribe(template => {
    //   const projectTemplate = template
    //     .replace('[jenkins-user]', this.userConfigJenkins.username)
    //     .replace('[project-git-remote]', this.projectInfo.repo_ssh)
    // })
  }
}

export interface BuildInfo {
  buildNumb: number;
  buildStatus: string;
  duration: number;
  startDate: Date;
}

const BUILD_INFO: BuildInfo[] = [
  { buildNumb: 1, buildStatus: 'fail',    duration: 5, startDate: new Date() },
  { buildNumb: 2, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 3, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 4, buildStatus: 'fail',    duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
]
