import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Project } from './project.entity';
import { TestPathInformation } from './test-path-information';

@Injectable()
export class TestPathStepsService {

  constructor(
    private http: HttpClient,
  ) { }

  fetchIntegrationTestPathForProject(project: Project): Observable<TestPathInformation[]> {
    return this.http.get<TestPathInformation[]>(`http://localhost:8080/code/test-paths/fibre-${project.slug}`);
  }

}
