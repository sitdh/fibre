import {
  Component, OnInit,
  AfterViewInit, Input
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Module, render } from 'viz.js/full.render.js';
import * as Viz from 'viz.js/viz.js';
import * as SvgPanZoom from 'svg-pan-zoom';

import { ProjectFetcherService } from '../project-fetcher.service';
import { Project } from '../project.entity';

@Component({
  selector: 'app-source-code-structure-analyzer',
  templateUrl: './source-code-structure-analyzer.component.html',
  styleUrls: ['./source-code-structure-analyzer.component.scss']
})
export class SourceCodeStructureAnalyzerComponent implements OnInit, AfterViewInit {

  project: Project;

  constructor(
    private projectFetchService: ProjectFetcherService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  ngAfterViewInit() { }

  refreshSourceCodeStructure() {
    console.log('Hello');
  }

  renderGraph(graph: string) {
    const viz = new Viz({ Module, render });
    viz.renderSVGElement(graph)
      .then(e => {
        console.log(e.id);
        e.id = 'graph_output';
        const canvas = document.getElementById('graph_display');

        while (canvas.firstChild) { canvas.removeChild(canvas.firstChild); }

        canvas.appendChild(e);
        const svgPanZoom: SvgPanZoom.Instance = SvgPanZoom('#graph_output', {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          minZoom: 0.1,
          maxZoom: 10,
        });
      });
  }

  fetchInformation(project: Project) {
    this.http.get(
      `http://localhost:8080/code/graph/fibre-${project.slug}/master/?p=${project.interested_package}`,
      { responseType: 'text' }
    ).subscribe(g => this.renderGraph(g));
  }

}
