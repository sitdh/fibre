import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RepositoryService } from '../repository.service';
import { AuthenGuardService } from '../authen-guard.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  repositories: any[]

  constructor(
    private _formBuilder: FormBuilder,
    private repoService: RepositoryService,
    private http: HttpClient,
    private ag: AuthenGuardService
  ) { 

  }

  ngOnInit() {
    this.ag.currentObservedUser().subscribe(u => {
      if (null != u) {
        this.fetchUserRepositories('sitdh')
      }
    })
  }

  fetchUserRepositories(user: string) {
    this.repoService.fetchRepositories(user).subscribe(u => {
      console.log(u)
    });
  }

  cancelProjectSubmit() {
  }

  createNewProject(projectInfo) {
    console.log(projectInfo)
  }
}
