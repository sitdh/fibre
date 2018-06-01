import { Component, OnInit, Input } from '@angular/core';

import { TestSuiteInformation } from '../test-suite-information.entity'
import { TestCaseGeneratorResponse } from '../test-case-generator-response.entity';
import { TestSuiteFetcherService } from '../test-suite-fetcher.service'
import { TestCaseGenerationCatalizeService } from '../test-case-generation-catalize.service';
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

  testsuiteInformation: TestSuiteInformation[];

  testSuiteGeteratedStatus = 'Failure';

  constructor(
    private generatorService: TestCaseGenerationCatalizeService,
    private testsuiteService: TestSuiteFetcherService,
  ) { }

  ngOnInit() {
  }

  @Input('project')
  set projectAssigned(project: Project) {
    if (typeof project != 'undefined') {
      this.project = project;
      this.generatorService
        .performedCheckTestSuiteGeneratedStatus(this.project)
        .subscribe(res => {
          if ('Done' === res.is_generated) this.performFetchTestcase();
        })
    }
  }

  isProjectExists() {
    return null === this.project;
  }

  performedGenerateTestcase() {
    console.log('Create Signal received');
    this.progressUI = 'indeterminate';

    this.panelMessage = 'Test cases are generating...';

    this.generatorService
      .performGenerateTestcaseForProject(this.project)
      .subscribe(res => {
        if ('Done' === res.is_generated)
          this.performFetchTestcase(this.project)
      })
  }

  performFetchTestcase(project?: Project) {
    const p = project || this.project;
    this.testsuiteService.fetchTestSuiteForProject(p)
      .subscribe(ts => {
        this.testsuiteInformation = ts;
        this.panelMessage = '';
      }).add(() => {
        this.progressUI = 'determinate';
      });
  }
}
