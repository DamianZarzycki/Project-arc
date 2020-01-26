import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthViewComponent } from './components/auth-view/auth-view.component';
import { AuthViewLoginComponent } from './components/auth-view-login/auth-view-login.component';
import { AuthViewRegistrationComponent } from './components/auth-view-registration/auth-view-registration.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';
import { UserLinkListComponent } from './components/links/user-link-list/user-link-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    AuthViewLoginComponent,
    AuthViewRegistrationComponent,
    ProfilePageComponent,
    UserLinkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
