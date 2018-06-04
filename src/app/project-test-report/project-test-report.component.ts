import { Component, OnInit, Input } from '@angular/core';

import { TestReportService } from '../test-report.service';
import { TestReport } from '../test-report.entity';
import { Project } from '../project.entity';
@Component({
  selector: 'app-project-test-report',
  templateUrl: './project-test-report.component.html',
  styleUrls: ['./project-test-report.component.scss']
})
export class ProjectTestReportComponent implements OnInit {

  project: Project;

  testResult: TestReport[];

  constructor(
    private testReport: TestReportService
  ) { }

  ngOnInit() {
  }

  @Input('project')
  set setProjectInformation(project: Project) {
    if (typeof project == 'undefined') return;
    this.project = project;
    this.testReport
      .fetchReportForProject(this.project)
      .subscribe(e => this.testResult = e);
  }

}
