import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { JenkinsConfigurationService } from '../jenkins-configuration.service';
import { JenkinsBuildService } from '../jenkins-build.service';

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
    private jenkinsBuilder: JenkinsBuildService
  ) { console.log(jenkinsBuilder); }

  ngOnInit() {
    console.log(this.jenkinsBuilder);
    this.performedStartProjectinitialization();
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
          });
      });

  }

  performedFireFirstBuild(jenkinsConfig: JenkinsConfiguration) {
    this.statusMessage = 'Building';
    this.jenkinsBuilder.firstBuildForJob(jenkinsConfig, this.data.project)
      .subscribe(message => {
        this.performConstantsCollection();
      });
  }

  private performConstantsCollection() {
    console.log('Collecting info');
    // this.performedGraphAnalysis();
  }

  private performedGraphAnalysis() {
  }
}
