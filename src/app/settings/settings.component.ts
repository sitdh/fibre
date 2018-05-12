import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { AuthenGuardService } from '../authen-guard.service';
import { JenkinsConfigurationService } from '../jenkins-configuration.service';
import { JenkinsConfiguration } from '../jenkins-configuration.entity';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  existingConfPanelOpenedState = true;
  userInfo: firebase.UserInfo;

  jenkinsConfigCollection: JenkinsConfiguration[];
  jenkinsInfo: JenkinsConfiguration;

  constructor(
    private ag: AuthenGuardService,
    private jenkinConfService: JenkinsConfigurationService
  ) { }

  ngOnInit() {
    this.ag.currentObservedUser().subscribe(u => {
      this.userInfo = u;
      this.jenkinConfService.findConfigurationForUserId(u.uid).subscribe(q => {
        this.existingConfPanelOpenedState = (null != q);
        this.jenkinsInfo = q.pop();
      });
    });
  }

  jenkinsConfigurationChange(event: any) {
    console.log(event.value);
  }

  switchedPanel() {
    this.existingConfPanelOpenedState = !this.existingConfPanelOpenedState;
    return this.existingConfPanelOpenedState;
  }

  fetchJenkinsConfig(p) {
    console.log(p);
  }
}
