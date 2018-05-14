import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    private jenkinsBuilder: JenkinsBuildService
  ) { }

  ngOnInit() {
    this.performedStartProjectinitialization();
  }

  performedStartProjectinitialization() {
    console.log('Init');
  }

}
