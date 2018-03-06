import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  isLinear: true
  firstStepControlGroup: FormGroup
  secondStepControlGroup: FormGroup

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.firstStepControlGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })

    this.secondStepControlGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }

}
