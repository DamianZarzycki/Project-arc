import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import * as _ from "lodash";

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from '../components/notifications/notifications.component';


const url = `https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score`


@Injectable({
  providedIn: 'root'
})
export class AuthService {




  private headers = new Headers({ "Content-Type": "text" });

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) { }


  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(localStorage.getItem('user_id')));
  }

  logOut() {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'text');
    return this.http.post<any>(url + `/logout`, null, { headers }
    ).subscribe(
      (val) => {
        localStorage.removeItem('token');
        this.router.navigate(['/'])
      },
      (response: Response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');

          this.router.navigate(['/'])
        }

      });
  }

  openModalOnPostSuccess(title: string, message: string) {
    const modalRef = this.modalService.open(NotificationsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
  }

  register(email: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'text');

    return this.http.post<any>(url + `/register?email=${email}&password=${password}`, {
      'Content-Type': 'application/json'
    }).subscribe(
      (val) => {
        this.openModalOnPostSuccess('Ups', 'Something went wrong.. error: ' + val);

      },
      (response: Response) => {
        if (response.status === 200) {
          this.openModalOnPostSuccess('Congrats', 'You have registered successfully, please activate Your account in mail message!' + response.status);
        } else {
          this.openModalOnPostSuccess('Ups', 'Something went wrong.. status: ' + response.status);
        }
      }
    );
  }

  login(email: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'text');
    return this.http.post<any>(url + `/login?email=${email}&password=${password}`, null, { headers }
    ).subscribe(
      (val) => {
        localStorage.setItem('token', val.authToken)
        localStorage.setItem('user_id', val.user_id)
        this.router.navigate(['/profile'])
      },
      (response: Response) => {

        if (response.status != 200) {
          this.openModalOnPostSuccess('Ups', 'Something went wrong.. status: ' + response.status);

          this.router.navigate(['/'])
        } else {
          this.router.navigate(['/profile'])

        }

      },
      () => {
      });
  }
}
