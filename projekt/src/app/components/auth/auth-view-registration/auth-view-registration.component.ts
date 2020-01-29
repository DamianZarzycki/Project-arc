import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from '../../notifications/notifications.component';


@Component({
  selector: 'app-auth-view-registration',
  templateUrl: './auth-view-registration.component.html',
  styleUrls: ['./auth-view-registration.component.scss']
})
export class AuthViewRegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,
    private auth: AuthService, private modalService: NgbModal
  ) { }

  openModal(title: string, message: string) {
    const modalRef = this.modalService.open(NotificationsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
    });

  }

  onSubmit() {
    let email = this.registrationForm.get('email').value;
    let password = this.registrationForm.get('password').value;
    this.auth.register({ email: email, password: password },
    ).subscribe(() => { },
      (err: Response) => {
        if (err.status === 200) {
          this.openModal('Congrats!', 'Registration almost completed, check Your email box for to account activation details!')
        } else if (err.status === 401) {
          this.openModal('Ups!', 'Email already taken!');

        } else {
          this.openModal('Ups!', 'Something went wrong..! ');
        }
      }

    );
  }

}
