import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeComponent } from './home/home.component';
import { QuiteComponent } from './quite/quite.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateUserAccountComponent } from './create-user-account/create-user-account.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectSettingComponent } from './project-setting/project-setting.component';
import { AuthenticationGuardService } from './authentication-guard.service';
import {
  ProjectSourcecodeStrutureAnalysisComponent
} from './project-sourcecode-struture-analysis/project-sourcecode-struture-analysis.component';
import {
  ProjectTestCasesDashboardComponent
} from './project-test-cases-dashboard/project-test-cases-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuardService] },
  { path: 'project/new', component: CreateProjectComponent, canActivate: [AuthenticationGuardService] },
  { path: 'p/:pid/:section', component: ProjectManagementComponent, canActivate: [AuthenticationGuardService]},
  { path: 'p/:pid/:section/structure',
    component: ProjectManagementComponent,
    canActivate: [AuthenticationGuardService],
    children: []
  },
  { path: 'p/:pid/:section/test-cases',
    component: ProjectManagementComponent,
    canActivate: [AuthenticationGuardService],
    children: []
  },
  { path: 'settings', component: SettingsComponent },
  { path: 'quite', component: QuiteComponent },
  { path: 'profile/:username', component: HomeComponent, canActivate: [AuthenticationGuardService] },
  { path: 'account/:action', component: CreateUserAccountComponent, canActivate: [AuthenticationGuardService] },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: []
})
export class AppRoutingModule { }
