import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { JenkinsBuildService } from '../jenkins-build.service';

@Component({
  selector: 'app-jenkins-settings-dialog',
  templateUrl: './jenkins-settings-dialog.component.html',
  styleUrls: ['./jenkins-settings-dialog.component.scss']
})
export class JenkinsSettingsDialogComponent implements OnInit {

  user: string
  password: string
  jobsname: string
  color = 'primary'
  mode = 'determinate'
  value = 0
  isHidden = true

  constructor(
    public dialogRef: MatDialogRef<JenkinsSettingsDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
  ) { 
  }

  ngOnInit() {
  }

	onNoClick(): void {
		this.dialogRef.close()
	}

  performTestConnectionToJenkins(connectionInfo, jenkinsBuildService: JenkinsBuildService): void {
    this.mode = "indeterminate"
    var config: JenkinsConfiguration = {
      server: 'http://' + connectionInfo.value.server,
      username: connectionInfo.value.username,
      password: connectionInfo.value.password
      project: '',
      project_slug: '',
      jobsname: ''
    }
    jenkinsBuildService.requestForServerConfig(config).subscribe(p => {
      // OK
      this.mode = "determinate"
      console.log(p)
    }, e => {
      // error
      this.mode = "determinate"
      console.log(e)
    })
  }

  cancelAllSettings(event: any) {
    this.dialogRef.close()
    this.mode = "deteminate"
  }
}
