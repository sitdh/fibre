import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

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

  displayedColumns = ['buildNumb', 'startDate']
  buildDataSource = new MatTableDataSource<BuildInfo>(BUILD_INFO)

  constructor(
    private http: HttpClient,
    private jenkins: JenkinsBuildService
  ) { 
		this.message = 'dashboard'
		// this.jenkins.requestForServerConfig()
		// 		.subscribe(r => {
		// 			console.log('eeee')
		// 		})
	}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.buildDataSource.paginator = this.paginator;
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
