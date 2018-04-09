import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { RepositoryService } from '../repository.service';
import { AuthenGuardService } from '../authen-guard.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  repositories: any[];

  selectedRepo: {};

  constructor(
    private _formBuilder: FormBuilder,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private repoService: RepositoryService,
    private http: HttpClient,
    private ag: AuthenGuardService
  ) { 
    this.ag.currentObservedUser().subscribe(u => {
      this.fetchUserRepositories(u)
    })
  }

  ngOnInit() {
  }

  fetchUserRepositories(user) {
    this.afs.collection('/usermeta').doc(user.email).valueChanges().subscribe(meta => {
      this.http.get(meta.repos_url).subscribe(repo => {
        this.repositories = repo
      })
    });
  }

  cancelProjectSubmit() {
  }

  createNewProject(projectInfo) {
    console.log(projectInfo)
  }
}
