import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProjectInformation } from './project-information';

@Injectable()
export class ProjectFetcherService {

  private projects: ProjectInformation[] = [
    { id: 1, name: 'Class pr', path: '/p/sitdh/class-pr', language: 'Java', description: 'axb' },
    { id: 2, name: 'Class pr', path: '/p/sitdh/class-pr', language: 'Java', description: 'axb' },
    { id: 3, name: 'Class pr', path: '/p/sitdh/class-pr', language: 'Java', description: 'axb' },
  ]

  constructor() { }

  public availableProject(): Observable<ProjectInformation[]> {
    return of(this.projects)
  }

}
