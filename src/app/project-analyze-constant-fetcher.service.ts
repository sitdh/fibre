import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './project.entity';
import { ConstantPackage } from './constant-package.entity';

@Injectable()
export class ProjectAnalyzeConstantFetcherService {

  constructor(
    private http: HttpClient
  ) { }

  fetchConstantForProject(project: Project): Observable<ConstantPackage[]> {
    return this.http.get<ConstantPackage[]>('http://localhost:8080/code/constant/fibre-' + project.slug);
  }

}
