import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Module, render } from 'viz.js/full.render.js';
import * as Viz from 'viz.js/viz.js';

import { ProjectFetcherService } from '../project-fetcher.service';
import { Project } from '../project.entity';

@Component({
  selector: 'app-source-code-structure-analyzer',
  templateUrl: './source-code-structure-analyzer.component.html',
  styleUrls: ['./source-code-structure-analyzer.component.scss']
})
export class SourceCodeStructureAnalyzerComponent implements OnInit {

  imageSrc = "";

	project: Project;

  constructor(
    private projectFetchService: ProjectFetcherService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(e => {
      this.fetchProjectInformation(e);
    });
  }

  ngOnInit() { }

  refreshSourceCodeStructure() {
    console.log('Hello');
  }

  renderGraph(graph: string) {
    // let viz = new Viz({ workerURL: 'viz.js/full.render.js'});
    var viz = new Viz({ Module, render });
    viz.renderSVGElement(graph)
      .then(e => {
        var canvas = document.getElementById('graph');
        canvas.appendChild(e);
      });
  }

  set setProjectInformation(project: Project) {
    this.project = project;
    this.fetchInformation(project);
  }

	fetchInformation(project: Project) {
		this.http.get(
      `http://localhost:8080/code/graph/fibre-${project.slug}/master/?p=${project.interested_package}`,
			{ responseType: 'text' }
		).subscribe(g => this.renderGraph(g));
	}

  fetchProjectInformation(pathParam) {
    this.projectFetchService
      .fetchProjectInformationWithSlug(pathParam.pid)
      .subscribe(projects => {
        this.fetchInformation(projects.pop());
      });
  }
}
