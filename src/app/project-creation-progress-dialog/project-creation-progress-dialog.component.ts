import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { of } from 'rxjs/observable/of';

import { JenkinsConfigurationService } from '../jenkins-configuration.service';
import { JenkinsBuildService } from '../jenkins-build.service';
import { Project } from '../project.entity';

@Component({
  selector: 'app-project-creation-progress-dialog',
  templateUrl: './project-creation-progress-dialog.component.html',
  styleUrls: ['./project-creation-progress-dialog.component.scss']
})
export class ProjectCreationProgressDialogComponent implements OnInit {

  titleMessage = 'Project creation status';
  statusMessage = 'Project initializing';

  constructor(
    public dialogRef: MatDialogRef<ProjectCreationProgressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jenkinsConfig: JenkinsConfigurationService,
    private jenkinsBuilder: JenkinsBuildService,
    private route: Router
  ) { console.log(jenkinsBuilder); }

  ngOnInit() {
    console.log(this.jenkinsBuilder);
    this.performedStartProjectinitialization();
  }

  disableProjectCreation(event: any) {
    console.log('Disable current project creating');
  }

  performedStartProjectinitialization() {
    console.log(this.data);
    this.statusMessage = 'Getting connection information';
    this.jenkinsConfig.findConfigurationForUserId(this.data.user.uid)
      .subscribe(jenkinConfigValue => {
        this.performedFetchJenkinsConfiguration(jenkinConfigValue)
      });
  }

  performedFetchJenkinsConfiguration(jenkinsConfiguration) {
    jenkinsConfiguration = jenkinsConfiguration.pop();
    this.jenkinsBuilder.fetchJenkinsJobsTemplate()
      .subscribe(projectTemplate => {
        this.statusMessage = 'Configuration fetched';

        projectTemplate = this.jenkinsBuilder
          .createJobsTemplateFromProject(projectTemplate, this.data.project, jenkinsConfiguration);

        this.jenkinsBuilder
          .createJenkinsJobs(projectTemplate, this.data.project, jenkinsConfiguration)
          .subscribe(response => {
            this.statusMessage = 'Project was created';
            this.performedFireFirstBuild(jenkinsConfiguration);
          }, error => {
            console.log(error);
          }, () => {
            this.watchBuildStatus(jenkinsConfiguration, this.data.project);
          });
      });

  }

  performedFireFirstBuild(jenkinsConfig) {
    this.statusMessage = 'Building';
    this.jenkinsBuilder.firstBuildForJob(jenkinsConfig, this.data.project)
      .subscribe(message => {
        this.performConstantsCollection();
        this.watchBuildStatus(jenkinsConfig, this.data.project);
      }, error => {
        this.performConstantsCollection();
        this.watchForJobsCreate(jenkinsConfig, this.data.project);
      }, () => {
        console.log('After fire');
      });
  }

  private performConstantsCollection() {
    console.log('Collecting info');
    // this.performedGraphAnalysis();
  }

  private performedGraphAnalysis() {
  }

  private watchForJobsCreate(jenkinsConfig, projectInfo: Project) {
    this.statusMessage = 'Preparing environment';
    this.jenkinsBuilder.jenkinsJobItemInformation(jenkinsConfig, projectInfo)
      .subscribe(result => {
        const masterJob = result.jobs.filter(e => 'master' === e.name);
        if (masterJob.length > 0) {
          this.watchBuildStatus(jenkinsConfig, projectInfo);
        } else {
          this.watchForJobsCreate(jenkinsConfig, projectInfo);
        }
      });
  }

  private watchBuildStatus(jenkinsConfig, projectInfo: Project) {
    this.statusMessage = 'Building project...';
    this.jenkinsBuilder
      .watchBuildStatus('master', this.data.project, jenkinsConfig)
      .subscribe(buildConfig => {
        if (true === buildConfig.building) {
          setTimeout(() => { 
            console.log('Still building');
            this.watchBuildStatus(jenkinsConfig, projectInfo);
          }, 5000);
        } else {
          this.statusMessage = 'Getting you to dashboard';
          setTimeout(() => { 
            this.dialogRef.close();
            this.route.navigate(['p', projectInfo.slug, 'dashboard']);
            console.log('Redirecting');
          }, 2000);
        }
      }, error => {
        console.log('error')
        // t
        // his.watchBuildStatus(jenkinsConfig);
      });
  }
}
