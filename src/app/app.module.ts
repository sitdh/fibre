import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

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
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatComponents,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MenuItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
