import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from '../../notifications/notifications.component';

@Component({
  selector: 'app-auth-view-login',
  templateUrl: './auth-view-login.component.html',
  styleUrls: ['./auth-view-login.component.scss']
})
export class AuthViewLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private modalService: NgbModal) { }


  openModal(title: string, message: string) {
    const modalRef = this.modalService.open(NotificationsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],

    });
  }


  onSubmit() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.auth.login({ email: email, password: password }).subscribe((data) => {
      localStorage.setItem('token', data.authToken);
      localStorage.setItem('user_id', data.user_id);
      this.router.navigate(['/profile']);
    },
      (err: Response) => {
        if (err.status === 200) {
          this.router.navigate(['/profile']);
        } else if (err.status === 401) {
          this.openModal('Ups!', 'You need to activate your acount first!');
        }
        else if (err.status === 403) {
          this.openModal('Ups!', 'You are already logged in!');
        }
        else {
          this.openModal('Ups!', 'Something went wrong..!');
        }
      }
    );
  }


}
