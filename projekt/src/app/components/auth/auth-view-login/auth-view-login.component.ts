import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-view-login',
  templateUrl: './auth-view-login.component.html',
  styleUrls: ['./auth-view-login.component.scss']
})
export class AuthViewLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6), Validators.required]],

    });
  }


  onSubmit() {
    this.auth.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }


}
