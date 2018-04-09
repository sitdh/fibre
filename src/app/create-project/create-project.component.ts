import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RepositoryService } from '../repository.service';

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
    _formBuilder: FormBuilder,
    repoService: RepositoryService,
    http: HttpClient
  ) { }

  ngOnInit() {
    this.firstStepControlGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })

    this.secondStepControlGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  }

  cancelProjectSubmit() {
  }

  createNewProject(projectInfo) {
    console.log(projectInfo)
  }
}
