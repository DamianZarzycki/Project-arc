import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


const url = `https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score`


@Injectable({
  providedIn: 'root'
})
export class AuthService {




  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(private http: HttpClient, private router: Router) { }


  checkIfToken() {
    if (localStorage.getItem('token')) {
      return true;

    } else {
      return false

    }

  }


  logOut() {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'text/html');
    return this.http.post<any>(url + `/logout`, null, { headers }
    ).subscribe(
      (val) => {
        console.log("Logout call successful value returned in body", val);
        localStorage.removeItem('token');
        this.router.navigate(['/auth'])
      },
      (response: Response) => {
        console.log("Response status: ", response.status);
        if (response.status === 200) {
          localStorage.removeItem('token');
          localStorage.removeItem('cart');

          this.router.navigate(['/auth'])
        }

      });
  }


  register(email: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');

    return this.http.post<any>(url + `/register?email=${email}&password=${password}`, {
      'Content-Type': 'application/json'
    });
  }

  login(email: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'text/html');
    return this.http.post<any>(url + `/login?email=${email}&password=${password}`, null, { headers }
    ).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body", val);
        localStorage.setItem('token', val)
        this.router.navigate(['/mainView'])
      },
      (response: Response) => {
        console.log("Response status: ", response.status);
        if (response.status != 200) {
          this.router.navigate([''])
        }

      });
  }}
