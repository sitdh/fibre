import { Component, OnInit, ViewChild } from '@angular/core';

import { SourceCodeStructureAnalyzerComponent } from '../source-code-structure-analyzer/source-code-structure-analyzer.component';
import { SourceCodeConstantsCollectionComponent } from '../source-code-constants-collection/source-code-constants-collection.component';
import { SourceCodeTestPathsAnalyzerComponent } from '../source-code-test-paths-analyzer/source-code-test-paths-analyzer.component';

@Component({
  selector: 'app-project-sourcecode-struture-analysis',
  templateUrl: './project-sourcecode-struture-analysis.component.html',
  styleUrls: ['./project-sourcecode-struture-analysis.component.scss']
})
export class ProjectSourcecodeStrutureAnalysisComponent implements OnInit {

  investigatedPackage = 'com.sitdh.thesis'

  @ViewChild(SourceCodeStructureAnalyzerComponent)
  sourceStructureAnalyzer: SourceCodeStructureAnalyzerComponent;

  @ViewChild(SourceCodeConstantsCollectionComponent)
  sourceConstantsCollection: SourceCodeConstantsCollectionComponent;

  @ViewChild(SourceCodeTestPathsAnalyzerComponent)
  sourceTestPaths: SourceCodeTestPathsAnalyzerComponent;

  constructor() { }

  ngOnInit() {
  }

}
