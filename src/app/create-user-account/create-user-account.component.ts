import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { UserRegistration } from '../user-registration.form';
import { CredentialService } from '../credential.service';
import { AppCredential } from '../app-credential';
import { AuthenGuardService } from '../authen-guard.service';

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.scss']
})
export class CreateUserAccountComponent implements OnInit {

  userRegister = new UserRegistration()

  nameControl = new FormControl();

  appId: string

  state: string

  redirectUrl: string

  scope: string

  user: Observable<firebase.User>

  constructor(
    private af: AngularFireAuth,
    private http: HttpClient,
    private router: Router,
    private ag: AuthenGuardService
  ) { 
    ag.currentObservedUser().subscribe(u => {
      console.log(u)
    })
  }

  ngOnInit() {
  }

  loginWithGithub(event: any) {
		event.preventDefault()
		let githubAuthProvider = new firebase.auth.GithubAuthProvider()
		githubAuthProvider.addScope('user:public_repo')
		githubAuthProvider.setCustomParameters({
			'allow_signup': 'true'
		})

    firebase.auth().signInWithPopup(githubAuthProvider).then(result => {
      const userInfo = result.additionalUserInfo
      const params = new HttpParams()
        .set('isnewuser', result.additionalUserInfo.isNewUser)
        .set('email', result.additionalUserInfo.profile.email)
        .set('username', result.additionalUserInfo.username)
        .set('provider', 'github')

      this.http.post('/api/account/create', {
        'newUser': result.additionalUserInfo.isNewUser,
        'email': result.additionalUserInfo.profile.email,
        'user': result.additionalUserInfo.username,
        'provider': 'github',
      }).subscribe( res => {
        console.log(res)
        // this.router.navigate(['dashboard'])
      }, err => {
        console.log('Error')
        console.log(err)
      })

		}).catch(error => {
			console.log(error)
		})

/**
			({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
      scope: 'user:public_repo'
    }).then(success => {
      consle.log(success)
    }).catch(e => {
      console.log(e)
    })
**/
  }

  submitform(user: any) {
    console.log(user)
    console.log(user.controls.username.value)
  }

  fetchAppCredential() {
    // this.credentialService.fetchCredential('github')
    //   .subscribe(credential => {
    //     this.appId = credential['app-id']
    //     this.redirectUrl = credential['callback']
    //     this.scope = credential['scope']
    //   })
    
  }

}
