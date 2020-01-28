import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }


  private messageSource = new Subject<boolean>();
  private commentsSource = new Subject<number>();
  private urlsSource = new Subject<number>();


  numberOfComments$ = this.commentsSource.asObservable();
  numberOfUrls$ = this.urlsSource.asObservable();
  messageSent$ = this.messageSource.asObservable();


  tellNumberOfComments(amount: number): void {
    this.commentsSource.next(amount);
  }

  tellNumberOfUrls(amount: number): void {
    this.urlsSource.next(amount);
  }

  tellSomethingToParent(message: boolean): void {
    this.messageSource.next(message);
  }
}
