import {
  Component, OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SourceCodeStructureAnalyzerComponent } from '../source-code-structure-analyzer/source-code-structure-analyzer.component';
import { SourceCodeConstantsCollectionComponent } from '../source-code-constants-collection/source-code-constants-collection.component';
import { SourceCodeTestPathsAnalyzerComponent } from '../source-code-test-paths-analyzer/source-code-test-paths-analyzer.component';

import { ProjectFetcherService } from '../project-fetcher.service';
import { Project } from '../project.entity';

@Component({
  selector: 'app-project-sourcecode-struture-analysis',
  templateUrl: './project-sourcecode-struture-analysis.component.html',
  styleUrls: ['./project-sourcecode-struture-analysis.component.scss']
})
export class ProjectSourcecodeStrutureAnalysisComponent implements OnInit {

  @ViewChild(SourceCodeStructureAnalyzerComponent)
  sourceStructureAnalyzer: SourceCodeStructureAnalyzerComponent;

  @ViewChild(SourceCodeConstantsCollectionComponent)
  sourceConstantsCollection: SourceCodeConstantsCollectionComponent;

  @ViewChild(SourceCodeTestPathsAnalyzerComponent)
  sourceTestPaths: SourceCodeTestPathsAnalyzerComponent;

  project: Project;

  constructor(
    private projectFetchService: ProjectFetcherService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(e => {
      this.fetchProjectInformation(e);
    });
  }

  ngOnInit() {
  }

  fetchProjectInformation(pathParam) {
    this.projectFetchService
      .fetchProjectInformationWithSlug(pathParam.pid)
      .subscribe(projects => {
        this.project = projects.pop();
        this.sourceStructureAnalyzer.fetchInformation(this.project);
      });
  }

}
