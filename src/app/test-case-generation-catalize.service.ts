import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// For mock
import { of } from 'rxjs/observable/of';

import { TestCaseGeneratorResponse } from './test-case-generator-response.entity';
import { Project } from './project.entity';

@Injectable()
export class TestCaseGenerationCatalizeService {

  endpoint = 'http://localhost:8080/test/generator/fibre';

  mockup: TestCaseGeneratorResponse = {
    'is_generated': 'Done',
    'message': 'lorem ipsum'
  };

  constructor(
    private http: HttpClient,
  ) { }

  performGenerateTestcaseForProject(project: Project): Observable<TestCaseGeneratorResponse> {
    return this.http.get<TestCaseGeneratorResponse>(`${this.endpoint}-${project.slug}`);
  }

  performedCheckTestSuiteGeneratedStatus(project: Project): Observable<TestCaseGeneratorResponse> {
    // return this.http.get<TestCaseGeneratorResponse>(`${this.endpoint}-${project.slug}/status`);
    return of(this.mockup);
  }

}
