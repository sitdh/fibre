import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Project } from './project.entity';
import { TestSuiteInformation } from './test-suite-information.entity';

@Injectable()
export class TestCaseFetchInformationService {

  constructor(
    private http: HttpClient
  ) { }

  fetchTestSuiteInformationForProject(project: Project): Observable<TestSuiteInformation[]> {
    return this.http.get<TestSuiteInformation[]>(`http://localhost:8080/test/testsuite/fibre-${project.slug}`);
  }
}
