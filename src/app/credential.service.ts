import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AppCredential } from './app-credential';

@Injectable()
export class CredentialService {

  constructor(
    private http: HttpClient
  ) { }

  fetchCredential(service: string): Observable<any> {
    return this.http.get('/api/auth/credential/' + service)
  }

}
