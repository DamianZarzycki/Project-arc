import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthViewComponent } from './components/auth/auth-view/auth-view.component';
import { ProfilePageComponent } from './components/profile/profile-page/profile-page.component';
import { UserLinkListComponent } from './components/links/user-link-list/user-link-list.component';
import { UserLinkCommentsComponent } from './components/links/user-link-comments/user-link-comments.component';
import { CantGoThereIfYouLoggedIn, AuthGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  { path: '*', component: AuthViewComponent,
  },
  { path: '', component: AuthViewComponent, 
},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'userLinks', component: UserLinkListComponent },
  { path: 'url/comments/:url', component: UserLinkCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
