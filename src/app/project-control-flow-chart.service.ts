import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { ClassMethodControlFlowChart } from './class-method-control-flow-chart';
import { Project } from './project.entity';

@Injectable()
export class ProjectControlFlowChartService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchControlFlowGraphFromProject(project: Project): Observable<ClassMethodControlFlowChart[]> {
    return this.http
      .get<ClassMethodControlFlowChart[]>(`http://localhost:8080/code/cfg/fibre-${project.slug}`);
  }
}
