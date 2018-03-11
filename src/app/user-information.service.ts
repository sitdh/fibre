import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserInformation } from './user-information.entity';

@Injectable()
export class UserInformationService {

  constructor() { }

  public currentUser(): Observable<UserInformation> {
    return of(null)
  }

  public isAuthenticate(): Observable<UserInformation> {
    return of(null)
  }
}
