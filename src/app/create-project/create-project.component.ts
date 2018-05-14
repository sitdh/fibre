import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { RepositoryService } from '../repository.service';
import { AuthenGuardService } from '../authen-guard.service';
import { JenkinsConfigurationService } from '../jenkins-configuration.service';

import {
  ProjectCreationProgressDialogComponent
} from '../project-creation-progress-dialog/project-creation-progress-dialog.component';

import { UserMeta } from '../user-meta.entity';
import { Repository } from '../repository.entity';
import { Project } from '../project.entity';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  selectedRepo: {};

  user: any;

  repositoryCollection: any;
  repositories: Observable<Repository[]>;
  selectedRepository: Repository;

  constructor(
    private _formBuilder: FormBuilder,
    private route: Router,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private repoService: RepositoryService,
    private http: HttpClient,
    private ag: AuthenGuardService,
    private jenkinsConfig: JenkinsConfigurationService,
  ) {
    this.ag.currentObservedUser().subscribe(u => {
      this.user = u;
      this.fetchUserRepositories(u);
    });
  }

  ngOnInit() {
  }

  fetchUserRepositories(user) {
    this.repositoryCollection = this.afs.collection('/repos');
    this.repositories = this.repositoryCollection.valueChanges();
  }

  cancelProjectSubmit() {
    this.route.navigate(['/']);
  }

  createNewProject(projectInfo) {
    const replaceSpaces = new RegExp(' ', 'g');
    const uid = this.afs.createId();
    const projectAlias = projectInfo.name.toLowerCase().replace(replaceSpaces, '-');

    const data: Project = {
      uid: uid,
      project_name: projectInfo.name,
      name: projectInfo.name,
      slug: projectAlias,
      git_name: projectInfo.repository.full_name,
      interested_package: projectInfo.interested_package,
      describe: projectInfo.describe,
      repo: projectInfo.repository.html_url,
      repo_ssh: this.selectedRepository.ssh_url,
      repo_doc: '/repos/' + String(projectInfo.repository.id),
      language: this.selectedRepository.language,
      project_location: '/p/' + projectAlias,
      owner: this.user.uid,
      branch: 'master',
    };

    console.log(data);
    // this.afs.collection('/projects')
    //   .doc(uid)
    //   .set(data)
    //   .then(() => {
    //     this.performCreateJenkinsProject(data)
    // });
  }

  selectedRepositoryChanged(event: any) {
    this.selectedRepository = event.value;
  }

  private performCreateJenkinsProject(projectInfo: any) {

    this.performFireFistProjectBuild(projectInfo);
  }

  private performFireFistProjectBuild(projectInfo: any) {
    // this.route.navigate([data.project_location]);
  }
}
