import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service'
  ;
import { NotificationsComponent } from '../components/notifications/notifications.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService,
    private modalService: NgbModal) { }

  open(title:string, body:string) {

    const modalRef = this.modalService.open(NotificationsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = body;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
    if(localStorage.getItem('token')){
      return true;
    }
    this.open("Ups","Cant go there..");

    this.router.navigate(['/']);
    return false;

  }
}
@Injectable({
  providedIn: 'root'
})
export class CantGoThereIfYouLoggedIn implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService,
    private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(NotificationsComponent);
    modalRef.componentInstance.title = 'Upss..';
    modalRef.componentInstance.message = 'You are already logged in!';
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.authService.isUserSignedIn()) {
      this.open();
      this.router.navigate(['profile']);
      return false;
    }

    return true;
  }
};