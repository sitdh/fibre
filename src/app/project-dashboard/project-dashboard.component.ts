import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { JenkinsSettingsDialogComponent } from '../jenkins-settings-dialog/jenkins-settings-dialog.component';
import { JenkinsBuildService } from '../jenkins-build.service';

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
		let dialogRef = this.settingDialog.open(JenkinsSettingsDialogComponent, {
			width: '550px',
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
