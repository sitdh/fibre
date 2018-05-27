import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project.entity';
import { ProjectAnalyzeConstantFetcherService } from '../project-analyze-constant-fetcher.service';
import { ConstantPackage } from '../constant-package.entity';

@Component({
  selector: 'app-source-code-constants-collection',
  templateUrl: './source-code-constants-collection.component.html',
  styleUrls: ['./source-code-constants-collection.component.scss']
})
export class SourceCodeConstantsCollectionComponent implements OnInit {

  @Input()
  project: Project;

  msg = 'hello';

  constantCollection: ConstantPackage[];

  constructor(
    private projectAnalyzeConstantFetch: ProjectAnalyzeConstantFetcherService
  ) { }

  ngOnInit() {
  }

  fetchInformation(project: Project) {
    this.projectAnalyzeConstantFetch
      .fetchConstantForProject(project)
      .subscribe(c => this.constantCollection = c);
  }
}
