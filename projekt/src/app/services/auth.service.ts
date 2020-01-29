import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import * as _ from "lodash";

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { BigqueryService } from './bigquery.service';


const url = `https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score`


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  headers = new HttpHeaders();


  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal, private bigqueryService: BigqueryService) { }


  public isUserSignedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }



  logOut() {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'text/html');
    return this.http.post<any>(url + `/logout`, null, { headers }
    ).subscribe(
      (val) => {

        localStorage.clear();
        this.router.navigate(['/']);
      },
      (response: Response) => {

        if (response.status === 200) {

          localStorage.clear();

          this.router.navigate(['/']);
        }

      });

  }

  openModalOnPostSuccess(title: string, message: string) {
    const modalRef = this.modalService.open(NotificationsComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
  }

  login(body) {
    return this.http.post<any>
      (url + `/login`, body, { headers: this.headers });
  }

  register(body) {
    return this.http.post<any>
      (url + `/register`, body, { headers: this.headers });
  }


}
