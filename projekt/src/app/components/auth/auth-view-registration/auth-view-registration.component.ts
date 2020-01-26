import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-view-registration',
  templateUrl: './auth-view-registration.component.html',
  styleUrls: ['./auth-view-registration.component.scss']
})
export class AuthViewRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.minLength(6), Validators.required]],
    });

  }

  onSubmit() {
    console.log('ahlsad');
    
    this.auth.register(this.registrationForm.get('email').value, this.registrationForm.get('password').value).subscribe(data=>{});
  }

}
