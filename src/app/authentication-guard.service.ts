import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private route: Router,
    private auth: AngularFireAuth
  ) {}

  canActivate(): Observable<boolean> {
    return this.auth.authState
      .take(1)
      .map(authState => !!authState)
      .do(auth => !auth ? this.route.navigate(['/account', 'new']) : true);
  }

}
