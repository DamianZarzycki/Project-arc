import { Component, OnInit, DoCheck } from '@angular/core';
import { RedditCommentsSentimentService } from 'src/app/services/reddit-comments-sentiment.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    // this.redditService.getNumberOfComments(localStorage.getItem('user_id')).subscribe(data => console.log(data));

  }


  numberOfUserUrls: number = 0;
  numberOfComments: number = 0;
  constructor(private redditService: RedditCommentsSentimentService) { }


  setNumberOfUserUrls(amount: number) {
    this.numberOfUserUrls = amount;
  }
  ngOnInit() {
    this.redditService.getNumberOfComments(localStorage.getItem('user_id')).subscribe(data => this.numberOfComments = data
    )

  }

}
