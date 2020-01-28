import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { CommunicationService } from './communication.service';


const url = `https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score`

@Injectable({
  providedIn: 'root'
})
export class RedditCommentsSentimentService {

  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(private http: HttpClient, private communication: CommunicationService) { }



  getUserUrls(user_id: string): Observable<any> {
    return this.http.get<any>(url + `/user/urls?user_id=${user_id}`)
      .pipe(map(
        (data) =>
          data));
  }

  getUserUrlComments(user_id: string, url: string): Observable<any> {
    return this.http.get<any>(`https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score/user/url/comments?user_id=${user_id}&url=${url}`)
      .pipe(map(
        (data) =>
          data));
  }

  getNumberOfComments(user_id): Observable<any> {
    return this.http.get<any>(`https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score/user/url/numberOfComments?user_id=${user_id}`);
  }

  getNumberOfCommentsOfUrl(user_id, url): Observable<any> {
    return this.http.get<any>(`https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score/user/url/numberOfCommentsOfUrl?user_id=${user_id}&url=${url}`);
  }

  getNumberOfUrls(user_id): Observable<any> {
    return this.http.get<any>(`https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score/user/url/numberOfUrls?user_id=${user_id}`).pipe(map(
      (data) => {
        data;

        this.communication.tellNumberOfUrls(data);
      }
    ));
  }

  addUrlToUser(user_id: string, url: string) {
    let urll = `https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score/users/addLink?user_id=${user_id}&url=${url}`
    return this.http.post<any>(urll, {
      'Content-Type': 'application/json'
    })
      .subscribe(
        (val) => {
          // this.openModalOnPostSuccess();
          this.communication.tellSomethingToParent(false);
        },
        response => {
          this.communication.tellSomethingToParent(false);
          this.getNumberOfComments(localStorage.getItem('user_id')).subscribe(() => { })
          this.getNumberOfUrls(localStorage.getItem('user_id')).subscribe(() => { })
        },
        () => {
        });
  }

  public deleteUrl<T>(user_id: string, url: string): Promise<T> {
    const remUrl = `https://sentimentapi-dot-arc-pjatk.appspot.com/project/v1/score/users/deleteLink?user_id=${user_id}&url=${url}`;

    return this.http.post<T>(remUrl, {
      'Content-Type': 'text'
    }).toPromise();
  }
}
