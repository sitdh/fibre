import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { TestCaseGeneratorResponse } from './test-case-generator-response.entity';
import { Project } from './project.entity';

@Injectable()
export class TestCaseGenerationCatalizeService {

  constructor(
    private http: HttpClient,
  ) { }

  performGenerateTestcaseForProject(project: Project): Observable<TestCaseGeneratorResponse> {
    return this.http.get<TestCaseGeneratorResponse>(`http://localhost:8080/test/generator/fibre-${project.slug}`);
  }
}
