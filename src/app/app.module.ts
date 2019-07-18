import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {JwtModule} from '@auth0/angular-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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

import {AuthGuard} from "./guards/auth.guard";
// import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchComponent } from './components/search/search.component';
// import { ViewAttComponent } from './components/view-att/view-att.component';
import { EditAttComponent } from './components/edit-att/edit-att.component';
import { AdminComponent } from './components/admin/admin.component';
// import { AddReviewComponent } from './components/add-review/add-review.component';
// import { ConfirmDeleteComponent } from './components/view-att/confirm-delete/confirm-delete.component';
// import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
// import { ConfirmDeleteComponent } from './components/add-review/confirm-delete/confirm-delete.component';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

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
    component: NewAttComponent,
    canActivate: [AuthGuard]
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
    component: ViewUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]

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
    ViewUserComponent,
    // NotificationsComponent,
    SearchComponent,
    // ViewAttComponent,
    EditAttComponent,
    AdminComponent,
    // AddReviewComponent,
    // ConfirmDeleteComponent



  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ValidateService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
