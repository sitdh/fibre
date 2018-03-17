import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
    private credentialService: CredentialService
  ) { }

  ngOnInit() {
    this.fetchAppCredential()
  }

  submitform(user: any) {
    console.log(user)
    console.log(user.controls.username.value)
  }

  fetchAppCredential() {
    this.credentialService.fetchCredential('github')
      .subscribe(credential => {
        this.appId = credential['app-id']
        this.redirectUrl = credential['callback']
        this.scope = credential['scope']
      })
    
  }

}
