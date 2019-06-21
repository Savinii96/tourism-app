import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {FlashMessagesModule} from "angular2-flash-messages";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';

import {MaterialModule} from './material.module';
import {LoginComponent} from './components/login/login.component';
import {NewAttComponent} from './components/new-att/new-att.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {OpenReqComponent} from './components/open-req/open-req.component';
import {RegisterComponent} from './components/register/register.component';
import {ViewUserComponent} from './components/view-user/view-user.component';

import {ValidateService} from "./services/validate/validate.service";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new-att',
    component: NewAttComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'open-req',
    component: OpenReqComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ViewUserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    NewAttComponent,
    DashboardComponent,
    OpenReqComponent,
    RegisterComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ValidateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
