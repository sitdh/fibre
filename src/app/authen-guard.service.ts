import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class AuthenGuardService {

  private localStorage

  constructor() { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
  }

  isAuthenticated(): boolean {
    let rememberToken = window.localStorage.getItem('remember-token')
    return (typeof rememberToken !== null)
  }

}
