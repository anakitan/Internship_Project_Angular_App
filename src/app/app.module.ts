import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthenticationRoutingModule } from './modules/authentication/authentication-routing.module';
import { FormsModule } from '@angular/forms';
import { CasesModule } from './modules/cases/cases.module';
import { CasesRoutingModule } from './modules/cases/cases-routing.module';
import { HomeModule } from './modules/home/home.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { PeopleModule } from './modules/people/people.module';
import { PeopleRoutingModule } from './modules/people/people-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkspaceModule } from './modules/workspace/workspace.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
    CasesModule,
    CasesRoutingModule,
    HomeModule,
    HomeRoutingModule,
    PeopleModule,
    PeopleRoutingModule,
    WorkspaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
