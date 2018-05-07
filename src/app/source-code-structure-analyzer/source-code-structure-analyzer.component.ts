import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-code-structure-analyzer',
  templateUrl: './source-code-structure-analyzer.component.html',
  styleUrls: ['./source-code-structure-analyzer.component.scss']
})
export class SourceCodeStructureAnalyzerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refreshSourceCodeStructure() {
    console.log('Hello')
  }

}
