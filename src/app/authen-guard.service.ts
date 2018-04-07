import { Injectable, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenGuardService {

  private localStorage

  private authState: any

  constructor(
    private af: AngularFireAuth
  ) { 
    this.af.authState.subscribe(auth => {
      this.authState = auth
    });
  }

  ngOnInit() { 
  }

  isAuthenticated(): boolean {
    return this.authState != null
  }

  currentObservedUser(): any {
    return this.af.authState
  }

}
