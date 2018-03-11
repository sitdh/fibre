import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

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
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatComponents,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
		MenuItemService, 
		ProjectFetcherService, UserInformationService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
