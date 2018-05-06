import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProjectBuildInformationService {

  constructor() { }

  fetchProjectBuildInformation(): Observable<BuildInfo[]> {
    return of(BUILD_INFO)
  }
}

export interface BuildInfo {
  buildNumb: number;
  buildStatus: string;
  duration: number;
  startDate: Date;
}

const BUILD_INFO: BuildInfo[] = [
  { buildNumb: 1, buildStatus: 'fail',    duration: 5, startDate: new Date() },
  { buildNumb: 2, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 3, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 4, buildStatus: 'fail',    duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
  { buildNumb: 5, buildStatus: 'success', duration: 5, startDate: new Date() },
]
