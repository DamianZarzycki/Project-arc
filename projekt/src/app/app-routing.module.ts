import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthViewComponent } from './components/auth/auth-view/auth-view.component';


const routes: Routes = [
  { path: '', component: AuthViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
