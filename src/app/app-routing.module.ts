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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project/new', component: CreateProjectComponent },
  { path: 'p/:pid', component: ProjectManagementComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'quite', component: QuiteComponent },
  { path: 'profile/:username', component: HomeComponent },
  { path: 'account/:action', component: CreateUserAccountComponent },
]

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
