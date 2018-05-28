import { Component, OnInit } from '@angular/core';

import { Module, render } from 'viz.js/full.render.js';
import * as Viz from 'viz.js/viz.js';
import * as SvgPanZoom from 'svg-pan-zoom';

import { ClassMethodControlFlowChart } from '../class-method-control-flow-chart';
import { MethodControlFlowChart } from '../method-control-flow-chart';
import { ProjectControlFlowChartService } from '../project-control-flow-chart.service';
import { Project } from '../project.entity';

@Component({
  selector: 'app-source-code-control-flow-graph',
  templateUrl: './source-code-control-flow-graph.component.html',
  styleUrls: ['./source-code-control-flow-graph.component.scss']
})
export class SourceCodeControlFlowGraphComponent implements OnInit {

  controlFlowChart: ClassMethodControlFlowChart[];
  methodCFG: MethodControlFlowChart[];

  graph_dot: string;

  methodCFG: any;

  viz = new Viz({ Module, render });

  constructor(
    private proejctCFGService: ProjectControlFlowChartService,
  ) { }

  ngOnInit() {
  }

  fetchInformation(project: Project) {
    this.proejctCFGService
      .fetchControlFlowGraphFromProject(project)
      .subscribe(cfg => {
        console.log(cfg);
        this.controlFlowChart = cfg;
      });
  }

  updateSelectedPackage(e: any) {
    console.log(e);
    this.methodCFG = e;
  }

  svgRender(e: any) {
    if (e.value.length > 0) {
      this.viz.renderString(e.value)
        .then(this.graphRender);
    } else {
      console.log('No dot file');
    }
  }

  graphRender(e) {
    var parser = new DOMParser();
    var svg = parser.parseFromString(e, 'image/svg+xml').documentElement;
    svg.id = 'cfg_graph_output';
    var graph = document.getElementById('cfg_graph_canvas');
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
}
