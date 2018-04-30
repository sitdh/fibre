import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  performTestConnectionToJenkins(event: any): void {
    this.mode = "indeterminate"
  }

  cancelAllSettings(event: any) {
    this.dialogRef.close()
    this.mode = "deteminate"
  }
}
