import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserInformation } from './user-information.entity';

@Injectable()
export class UserInformationService {

  constructor(
    private http: HttpClient
  ) { }

  public currentUser(): Observable<any> {
    return this.http.get('/api/')
  }

  public isAuthenticate(): Observable<any> {
    return this.http.get('/api/')
  }
}
