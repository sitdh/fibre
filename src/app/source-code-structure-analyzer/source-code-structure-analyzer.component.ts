import {
  Component, OnInit,
  AfterViewInit, Input
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

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

  progessBarMode = 'indeterminate';

  project: Project;

  svgPanZoomOption = {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 0.1,
    maxZoom: 10,
  };

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

  renderGraph(graph) {

    const viz = new Viz({ Module, render });

    viz.renderString(graph.class)
      .then(this.appendClassGraph);

    viz.renderSVGElement(graph.method)
      .then(this.appendMethodGraph);
  }

  fetchInformation(project: Project): Observable<any> {
    this.http.get(
      `http://localhost:8080/code/graph/fibre-${project.slug}/master/?p=${project.interested_package}`
    ).subscribe(g => this.renderGraph(g));

    return of();
  }

  appendClassGraph(e) {
    const parser = new DOMParser();
    const svg = parser.parseFromString(e, 'image/svg+xml').documentElement;
    svg.id = 'class_graph_output';
    const graph = document.getElementById('class_canvas');
    while (graph.firstChild) { graph.removeChild(graph.firstChild); }
    graph.appendChild(svg);
    SvgPanZoom(svg, {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 0.1,
      maxZoom: 10,
    });

  }

  appendMethodGraph(e) {
    e.id = 'method_graph_output';
    const canvas = document.getElementById('method_canvas');
    while (canvas.firstChild) { canvas.removeChild(canvas.firstChild); }
    canvas.appendChild(e);
    const svgPanZoom: SvgPanZoom.Instance = SvgPanZoom('#method_graph_output', {
      zoomEnabled: true,
      controlIconsEnabled: true,
      fit: true,
      center: true,
      minZoom: 0.1,
      maxZoom: 10,
    });
  }

}
