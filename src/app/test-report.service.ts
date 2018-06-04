import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Project } from './project.entity';
import { TestReport } from './test-report.entity';
@Injectable()
export class TestReportService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchReportForProject(project: Project): Observable<TestReport[]> {
    return this.http.get<TestReport[]>(`http://localhost:8080/report/fibre-${project.slug}`)
  }
}
