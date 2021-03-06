import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AuthenGuardService } from './authen-guard.service';
import { environment as env } from './../environments/environment';

@Injectable()
export class RepositoryService {

  constructor(
    private ag: AuthenGuardService,
    private http: HttpClient
  ) { }

  fetchRepositories(u: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${u}/repos`);
  }

  updateUserRepositories(userMeta: any): Observable<any> {
    return this.http.get(
      userMeta.repos_url + "?per_page=" + userMeta.public_repos,
      {
        headers: {
          'Accept': 'application/vnd.github.v3',
          'Authorization': 'token ' + userMeta.access_token
        }
      }
    )

  }

}
