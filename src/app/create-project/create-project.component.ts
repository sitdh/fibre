import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { RepositoryService } from '../repository.service';
import { AuthenGuardService } from '../authen-guard.service';

import { UserMeta } from '../user-meta.entity';

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
    let i = 1
    this.afs.collection('/repositories').doc(user.uid).collection('/repo')
      .valueChanges().subscribe(repos => {
        this.repositories = repos
      })
  }

  cancelProjectSubmit() {
  }

  createNewProject(projectInfo) {
    console.log(projectInfo)
  }

  selectedRepositoryChanged(event: any) {
    console.log(event)
    // let repo = this.repositories.filter(e => e.id == event.value)
  }
}
