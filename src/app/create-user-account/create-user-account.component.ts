import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'

import { UserRegistration } from '../user-registration.form';
import { CredentialService } from '../credential.service';
import { AppCredential } from '../app-credential';

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

  constructor(
    private af: AngularFireAuth
  ) { 
    // check user exists and redirect
    // redirect: this.router.navigateByUrl('..some-url..')
  }

  ngOnInit() {
    /// this.fetchAppCredential()
  }

  loginWithGithub(event: any) {
		event.preventDefault()
		let githubAuthProvider = new firebase.auth.GithubAuthProvider()
		githubAuthProvider.addScope('user:public_repo')
		githubAuthProvider.setCustomParameters({
			'allow_signup': 'true'
		})
    firebase.auth().signInWithPopup(githubAuthProvider).then(result => {
			console.log(result)
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
