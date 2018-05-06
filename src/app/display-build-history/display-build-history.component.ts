import { 
  Component, ViewChild, OnInit, EventEmitter,
} from '@angular/core';

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { ProjectBuildInformationService, BuildInfo } from '../project-build-information.service';

@Component({
  selector: 'app-display-build-history',
  templateUrl: './display-build-history.component.html',
  styleUrls: ['./display-build-history.component.scss']
})
export class DisplayBuildHistoryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  buildDataSource: MatTableDataSource<BuildInfo>;
  displayedColumns = ['buildNumb', 'buildStatus', 'startDate', 'duration'];

  constructor(
    private projectBuildInfoService: ProjectBuildInformationService
  ) { }

  ngOnInit() {
    this.projectBuildInfoService
      .fetchProjectBuildInformation()
      .subscribe((buildHistory: BuildInfo[]) => {
        this.buildDataSource= new MatTableDataSource<BuildInfo>(buildHistory)
      })
  }

  ngAfterViewInit() {
    this.buildDataSource.paginator = this.paginator;
  }
}
