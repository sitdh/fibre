import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-jenkins-settings-dialog',
  templateUrl: './jenkins-settings-dialog.component.html',
  styleUrls: ['./jenkins-settings-dialog.component.scss']
})
export class JenkinsSettingsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JenkinsSettingsDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

	onNoClick(): void {
		this.dialogRef.close()
	}
}
