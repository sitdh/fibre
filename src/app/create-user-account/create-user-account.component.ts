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
import { RepositoryService } from '../repository.service';

import { UserMeta } from '../user-meta.entity';
import { Repository } from '../repository.entity';

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

  autoNavigate = true;

  constructor(
    private af: AngularFireAuth,
    private afs: AngularFirestore,
    private http: HttpClient,
    private route: Router,
    private repositoryService: RepositoryService,
    private ag: AuthenGuardService
  ) { 
    ag.currentObservedUser().subscribe(u => {
      if (null != u && true == this.autoNavigate) {
        route.navigate(['/dashboard'])
      }
    })
  }

  ngOnInit() {
  }

  loginWithGithub(event: any) {
		event.preventDefault()
		let githubAuthProvider = new firebase.auth.GithubAuthProvider()
		githubAuthProvider.addScope('repo,read:user,read:user:email')
		githubAuthProvider.setCustomParameters({
			'allow_signup': 'true'
		})

    firebase.auth().signInWithPopup(githubAuthProvider).then(result => {
      this.autoNavigate = false
      let userMetaInformation: UserMeta = {
        access_token  : result.credential.accessToken,
        avatar_url    : result.additionalUserInfo.profile.avatar_url,
        bio           : result.additionalUserInfo.profile.bio,
        blog          : result.additionalUserInfo.profile.blog,
        display_name  : result.user.displayName,
        profile       : result.additionalUserInfo.profile.url,
        profile_url   : result.additionalUserInfo.profile.html_url,
        repos_url     : result.additionalUserInfo.profile.repos_url,
        provider      : result.additionalUserInfo.providerId,
        public_repos  : result.additionalUserInfo.profile.public_repos,
        uid           : result.additionalUserInfo.profile.id,
        username      : result.additionalUserInfo.username,
        owner         : result.user.uid,
      }

      this.afs.collection('/usermeta').doc(result.user.uid).set(userMetaInformation)
        .then(() => {
          this.repositoryService.updateUserRepositories(userMetaInformation)
            .subscribe(repos => {
              let filteredRepo = repos.filter(r => r.language == 'Java')
              filteredRepo.forEach( r => {
                var repo: Repository = r
                repo.repo_owner = result.user.uid
                this.afs.collection('/repos')
                  .doc(String(repo.id)).set(repo)
                  .then(() => {
                    this.route.navigate(['/dashboard'])
                  })
              })
            })
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

  setUpUserEnvironment() {
  }

}
