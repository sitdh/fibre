import {
  Component, OnInit, EventEmitter,
  Inject, Input, Output
} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { JenkinsSettingsDialogComponent } from '../jenkins-settings-dialog/jenkins-settings-dialog.component';
import { JenkinsBuildService } from '../jenkins-build.service';
import { SourceCodeStructureAnalyzerService } from '../source-code-structure-analyzer.service';
import { JenkinsConfigurationService } from '../jenkins-configuration.service';
import { ProjectFetcherService } from '../project-fetcher.service';
import { JenkinsConfiguration } from '../jenkins-configuration.entity';
import { Project } from '../project.entity';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  projectInfo: Project;
  _projectInfo = null;

  @Output('jenkinsconfig') jenkinsconfig = new EventEmitter<JenkinsConfiguration>();

  name: string;
  message: string;
  animal: string;

  jenkinsStatus = 'jenkins-fire';

  userConfigJenkins: JenkinsConfiguration;

  constructor(
    private route: Router,
    private http: HttpClient,
    private jenkins: JenkinsBuildService,
    private settingDialog: MatDialog,
    private projectFetcher: ProjectFetcherService,
    private jenkinsConfService: JenkinsConfigurationService,
    private sourceAnalyzerService: SourceCodeStructureAnalyzerService
  ) { }

  ngOnInit() { }

  openJenkinsSettingDialog(): void {
    const dialogRef = this.settingDialog.open(JenkinsSettingsDialogComponent, {
      width: '550px',
      data: {
        jenkins_jobs_uid: this.userConfigJenkins.uid,
        project_uid: this.projectInfo.uid,
        jenkins_config: this.userConfigJenkins,
        jenkins_build: this.jenkins,
        project_repo: this.projectInfo.repo_ssh
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.jenkins.fetchJenkinsJobsTemplate().subscribe(template => {
        template = template
          .replace('[jenkins-user]', result.jenkins_config.username)
          .replace('[project-git-remote]', result.project_repo);

        // this.jenkins
        //   .createJenkinsJobs(result.jenkins_config, template)
        //   .subscribe(r => {
        //     if (null == r) { console.log('Jobs was created'); }
        //     this.jenkins.firstBuildForJob(result.jenkins_config).subscribe(() => {
        //       console.log('First build was fired');
        //     });
        //   });
      });
    });
  }

  @Input('project')
  set projectInformation(project: Project) {
    if (null != project) { this.fetchJenkinsConnectionStatus( project ); }
  }

  fetchJenkinsConnectionStatus(projectInfo: Project) {
    this.jenkins.isJenkinsServerSetup(projectInfo).subscribe(p => {
      this.projectInfo = projectInfo;

      if (1 === p.length) {
        this.jenkinsStatus = 'jenkins';
        this.userConfigJenkins = p.pop();
      } else {
        this.jenkinsStatus = 'jenkins-fire';
        this.userConfigJenkins = {
          project: projectInfo.project_name,
          project_slug: projectInfo.slug,
          server: '',
          username: '',
          password: '',
          jobsname: projectInfo.slug
        };
      }
    });
  }

  buildJenkinsProjectJob(event: any) {
    this.jenkinsConfService
      .findConfigurationForProjectId(this.projectInfo.uid)
      .subscribe(p => {
        if (1 === p.length) {
          const jenkinsConfig: JenkinsConfiguration = p.pop();
          this.jenkins
            .forceJenkinsToBuild(jenkinsConfig)
            .subscribe(
              build => console.log(build),
              (error: any) => { console.error(error); }
            );
        }
      });
  }

  // Code structure
  refreshCodeStructure(event: any) {
    this.sourceAnalyzerService.analyzeSourceStructure();
  }

  reviewSourceCodeStructure(event: any) {
    console.log(event);
  }

  // Test case
  reviewAndCreateTestCases(event: any) {
    console.log(event);
  }

  executionTestCase(event: any) {
    console.log(event);
  }

  // Report
  fetchLastestExecutionsResult(event: any) {
    console.log(event);
  }

  reviewExecutionResult(event: any) {
    console.log(event);
  }

  rebuildProject(event: any) {
  }
}
