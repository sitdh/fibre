import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { ProjectFetcherService } from './project-fetcher.service';

import { MatComponents } from './mat-components.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuItemService } from './menu-item.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SettingsComponent } from './settings/settings.component';
import { QuiteComponent } from './quite/quite.component';
import { HomeComponent } from './home/home.component';
import { PageMetaComponent } from './page-meta/page-meta.component';
import { UserInformationService } from './user-information.service';
import { CreateUserAccountComponent } from './create-user-account/create-user-account.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenGuardService } from './authen-guard.service';
import { AppConfigService } from './app-config.service';
import { CredentialService } from './credential.service';

import { environment } from './../environments/environment';
import { RepositoryService } from './repository.service';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectSettingComponent } from './project-setting/project-setting.component';
import { JenkinsBuildService } from './jenkins-build.service';
import { JenkinsConfigurationService } from './jenkins-configuration.service';
import { JenkinsSettingsDialogComponent } from './jenkins-settings-dialog/jenkins-settings-dialog.component';
import { SourceCodeStructureAnalyzerService } from './source-code-structure-analyzer.service';
import { ProjectSourcecodeStrutureAnalysisComponent } from './project-sourcecode-struture-analysis/project-sourcecode-struture-analysis.component';
import { DisplayBuildHistoryComponent } from './display-build-history/display-build-history.component';
import { ProjectBuildInformationService } from './project-build-information.service';
import { SourceCodeStructureAnalyzerComponent } from './source-code-structure-analyzer/source-code-structure-analyzer.component';
import { SourceCodeConstantsCollectionComponent } from './source-code-constants-collection/source-code-constants-collection.component';
import { SourceCodeTestPathsAnalyzerComponent } from './source-code-test-paths-analyzer/source-code-test-paths-analyzer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DashboardComponent,
    CreateProjectComponent,
    SettingsComponent,
    QuiteComponent,
    HomeComponent,
    PageMetaComponent,
    CreateUserAccountComponent,
    AuthenticationComponent,
    ProjectManagementComponent,
    ProjectDashboardComponent,
    ProjectSettingComponent,
    JenkinsSettingsDialogComponent,
    ProjectSourcecodeStrutureAnalysisComponent,
    DisplayBuildHistoryComponent,
    SourceCodeStructureAnalyzerComponent,
    SourceCodeConstantsCollectionComponent,
    SourceCodeTestPathsAnalyzerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatComponents,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
		AngularFireAuthModule, AngularFirestoreModule, AngularFireStorageModule
  ],
	exports: [
    JenkinsSettingsDialogComponent,
	],
	entryComponents: [
    JenkinsSettingsDialogComponent,
	],
  providers: [
    MenuItemService,
    ProjectFetcherService, UserInformationService, AuthenGuardService, 
    AppConfigService, CredentialService, RepositoryService, 
    JenkinsBuildService, JenkinsConfigurationService, SourceCodeStructureAnalyzerService, ProjectBuildInformationService,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
