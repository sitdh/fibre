import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { UserRegistration } from '../user-registration.form';
import { CredentialService } from '../credential.service';
import { AppCredential } from '../app-credential';
import { AuthenGuardService } from '../authen-guard.service';

import { UserMeta } from '../user-meta.entity';

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.scss']
})
export class CreateUserAccountComponent implements OnInit {

  userRegister = new UserRegistration()

  nameControl = new FormControl();

  appId: string;

  state: string;

  redirectUrl: string;

  scope: string;

  user: Observable<firebase.User>;

  constructor(
    private af: AngularFireAuth,
    private afs: AngularFirestore,
    private http: HttpClient,
    private route: Router,
    private ag: AuthenGuardService
  ) { 
    ag.currentObservedUser().subscribe(u => {
      if (null != u) {
        route.navigate(['/dashboard'])
      }
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
      this.afs.collection('/usermeta').doc(result.user.uid).set({
        username      : result.additionalUserInfo.username,
        provider      : result.additionalUserInfo.providerId,
        avatar_url    : result.additionalUserInfo.profile.avatar_url,
        blog          : result.additionalUserInfo.profile.blog,
        bio           : result.additionalUserInfo.profile.bio,
        repos_url     : result.additionalUserInfo.profile.repos_url,
        profile_url   : result.additionalUserInfo.profile.html_url,
        display_name  : result.user.displayName,
        access_token  : result.credential.accessToken,
      }).then(() => {
        console.log('Document was created')
      }).catch(e => {
        console.error('Error while create document ', e)
      })

		}).catch(error => {
			console.log(error)
		})

  }

  submitform(user: any) {
    console.log(user)
    console.log(user.controls.username.value)
  }

  fetchAppCredential() {
    
  }

}
