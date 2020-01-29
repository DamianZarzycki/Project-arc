import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BigqueryService {

  url = `https://arc-pjatk.appspot.com/project/v1/score/statistics`;


  constructor(private http: HttpClient) { }

  // public numberOfCommentsToBQ: number = 0;


  // getNumberOfComments() {
  //   return this.numberOfCommentsToBQ;
  // }

  // setNumberOfComments(amount: number) {
  //   this.numberOfCommentsToBQ += amount;
  // }


  public addToStatistics(data: object) {

    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http.post<any>(this.url, data, { headers: headers }).subscribe(
      (val) => {

      },
      (response: Response) => {

      }
    );



  }
}
