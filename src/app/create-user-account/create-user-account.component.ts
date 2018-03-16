import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserRegistration } from '../user-registration.form';

@Component({
  selector: 'app-create-user-account',
  templateUrl: './create-user-account.component.html',
  styleUrls: ['./create-user-account.component.scss']
})
export class CreateUserAccountComponent implements OnInit {

  pageTitle = 'New user'

  userRegister = new UserRegistration()

  nameControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  submitform(user: any) {
    console.log(user.controls.email.value)
  }

  opengit(g: any) {
    console.log(g)
  }

}
