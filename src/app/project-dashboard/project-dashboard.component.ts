import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { JenkinsBuildService } from '../jenkins-build.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

	message: string;

	name: string;
	animal: string;

  displayedColumns = ['buildNumb', 'startDate']
  buildDataSource = new MatTableDataSource<BuildInfo>(BUILD_INFO)

  constructor(
    private http: HttpClient,
    private jenkins: JenkinsBuildService,
		private settingDialog: MatDialog
  ) { 
		this.message = 'dashboard'
	}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.buildDataSource.paginator = this.paginator;
  }

	openJenkinsSettingDialog(): void {
		let dialogRef = this.settingDialog.open(ProjectDashboardJenkinsSettingDialog, {
			width: '250px',
			data: { name: this.name, animal: this.animal }
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('Dialog was closed')
			this.animal = result
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


@Component({
  selector: 'project-dashboard-jenkins-setting-dialog',
  templateUrl: './project-dashboard-jenkins-setting.dialog.html',
  styleUrls: ['./project-dashboard-jenkins-setting.dialog.scss'],
	entryComponents: [ProjectDashboardJenkinsSettingDialog]
})
export class ProjectDashboardJenkinsSettingDialog {

	constructor(
		public dialogRef: MatDialogRef<ProjectDashboardJenkinsSettingDialog>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	onNoClick(): void {
		this.dialogRef.close()
	}
}
