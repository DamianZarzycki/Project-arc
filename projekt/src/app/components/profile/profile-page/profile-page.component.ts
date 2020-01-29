import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';
import { RedditCommentsSentimentService } from 'src/app/services/reddit-comments-sentiment.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, DoCheck, AfterViewChecked {




  numberOfUserUrls: number = 0;
  numberOfUserComments: number = 0;
  constructor(private redditService: RedditCommentsSentimentService,
    private communication: CommunicationService) { }


  setNumberOfUserUrls(amount: number) {

    this.numberOfUserUrls = amount;
  }
  setNumberOfUserComments(amount: number) {
    this.communication.numberOfComments$.subscribe(data => this.numberOfUserComments = data)

    this.numberOfUserComments = amount;
  }
  ngOnInit() {

    this.redditService.getNumberOfUrls(data => {
      this.numberOfUserUrls = data
    })

    this.redditService.getNumberOfComments(data =>
      this.numberOfUserComments = data);

  }
  ngDoCheck(): void {

    this.redditService.getNumberOfComments(data =>
      this.numberOfUserComments = data)

    this.redditService.getNumberOfUrls(data =>
      this.numberOfUserUrls = data)

  }

  ngAfterViewChecked(): void {

    this.redditService.getNumberOfComments(data =>
      this.numberOfUserComments = data)

    this.redditService.getNumberOfUrls(data =>
      this.numberOfUserUrls = data)
  }

}
