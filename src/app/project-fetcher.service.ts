import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Project } from './project.entity';

@Injectable()
export class ProjectFetcherService {

  projects: Project[];

  constructor(
    private db: AngularFirestore
  ) { }

  public availableProject(): Observable<Project[]> {
    return of(this.projects);
  }

  fetchProjectInformationWithSlug(slug: string): Observable<Project[]> {
    return this.db.collection<Project>('projects', ref => {
      return ref.where('slug', '==', slug);
    }).valueChanges();
  }

  fetchProjectInformationWithSlugOfOwner(slug: string, ownerId: string): Observable<Project[]> {
    return this.db.collection<Project>('projecct', ref => {
      return ref.where('slug', '==', slug).where('owner', '==', ownerId);
    }).valueChanges();
  }

}
