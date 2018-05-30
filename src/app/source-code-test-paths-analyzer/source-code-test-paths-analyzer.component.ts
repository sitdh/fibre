import { Component, OnInit } from '@angular/core';

import { TestPathStepsService } from '../test-path-steps.service';
import { TestPathInformation } from '../test-path-information';
import { Project } from '../project.entity';
import { TestPathTable } from '../test-path-table';

@Component({
  selector: 'app-source-code-test-paths-analyzer',
  templateUrl: './source-code-test-paths-analyzer.component.html',
  styleUrls: ['./source-code-test-paths-analyzer.component.scss']
})
export class SourceCodeTestPathsAnalyzerComponent implements OnInit {

  testInformation: TestPathInformation[];

  constructor(
    private testpathService: TestPathStepsService,
  ) { }

  ngOnInit() {
  }

  fetchInformation(project: Project) {
    this.refreshTestPathInformation(project);
  }

  refreshTestPathInformation(project: Project) {
    this.testpathService
      .fetchIntegrationTestPathForProject(project)
      .subscribe(tp => {
        this.testInformation = tp
      });
  }
}
