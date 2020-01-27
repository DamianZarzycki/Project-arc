import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }


 private messageSource = new Subject<boolean>();
 
 
 messageSent$ = this.messageSource.asObservable();
 
 
 
 tellSomethingToParent(message: boolean): void {
   this.messageSource.next(message);
 }
}
