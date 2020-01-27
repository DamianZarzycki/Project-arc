import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';
import { UserLinkListComponent } from './components/links/user-link-list/user-link-list.component';
import { AuthViewComponent } from './components/auth/auth-view/auth-view.component';
import { AuthViewLoginComponent } from './components/auth/auth-view-login/auth-view-login.component';
import { AuthViewRegistrationComponent } from './components/auth/auth-view-registration/auth-view-registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLinkAddComponent } from './components/links/user-link-add/user-link-add.component';
import { UserLinkCommentsComponent } from './components/links/user-link-comments/user-link-comments.component';
import { UserLinkListItemComponent } from './components/links/user-link-list-item/user-link-list-item.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    AuthViewLoginComponent,
    AuthViewRegistrationComponent,
    ProfilePageComponent,
    UserLinkListComponent,
    UserLinkAddComponent,
    UserLinkCommentsComponent,
    UserLinkListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
