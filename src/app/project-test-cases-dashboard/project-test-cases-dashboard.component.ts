import { Component, OnInit, Input } from '@angular/core';

import {  TestCaseGenerationCatalizeService } from '../test-case-generation-catalize.service';
import {  TestCaseGeneratorResponse } from '../test-case-generator-response.entity';
import { Project } from '../project.entity';

@Component({
  selector: 'app-project-test-cases-dashboard',
  templateUrl: './project-test-cases-dashboard.component.html',
  styleUrls: ['./project-test-cases-dashboard.component.scss']
})
export class ProjectTestCasesDashboardComponent implements OnInit {

  panelMessage = 'There is no test case yet.';

  progressUI = 'determinate';

  project: Project;

  testcases: string[];

  constructor(
    private generatorService: TestCaseGenerationCatalizeService,
  ) { 
  }

  ngOnInit() {
  }

  @Input('project')
  set projectAssigned(project: Project) {
    if (typeof project !== undefined) {
      this.project = project;
      console.log(this.project);
    }
  }

  isProjectExists() {
    return null === this.project;
  }

  performedGenerateTestcase() {
    this.progressUI = 'indeterminate';

    this.panelMessage = 'Test case are generating...'

    this.generatorService
      .performGenerateTestcaseForProject(this.project)
      .subscribe(this.testcaseGenerated);
  }

  testcaseGenerated(response: TestCaseGeneratorResponse) {
    this.progressUI = 'determinate';
  }
}
