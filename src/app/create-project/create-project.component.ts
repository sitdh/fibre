import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

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

  user: any;

  constructor(
    private _formBuilder: FormBuilder,
    private route: Router,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private repoService: RepositoryService,
    private http: HttpClient,
    private ag: AuthenGuardService,
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

    this.user = user;
  }

  cancelProjectSubmit() {
  }

  createNewProject(projectInfo) {
    var repo = this.selectedRepo[0]
    var projectAlias = projectInfo.name.toLowerCase().replace(' ', '-')
    var projectName = (this.user.uid + " " + projectAlias)
      .toLowerCase()
      .replace(' ', '-')

    var data = {
      name: projectInfo.name,
      language: repo.language,
      description: projectInfo.describe,
      repo: repo.git_url,
      htmlurl: repo.html_url,
      project_location: '/p/' + projectAlias,
    }

    this.afs.collection('/projects')
      .doc(this.user.uid)
      .collection('/repo')
      .doc(projectName)
      .set(data)
      .then(() => {
        this.route.navigate([data.project_location])
    })
  }

  selectedRepositoryChanged(event: any) {
    this.selectedRepo = this.repositories.filter(e => e.id == event.value)
  }
}
