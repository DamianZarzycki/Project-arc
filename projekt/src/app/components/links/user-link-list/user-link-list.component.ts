import { Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { RedditCommentsSentimentService } from 'src/app/services/reddit-comments-sentiment.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-user-link-list',
  templateUrl: './user-link-list.component.html',
  styleUrls: ['./user-link-list.component.scss']
})
export class UserLinkListComponent implements OnInit, DoCheck {


  userUrls = [];
  userComments: number;
  numberOfCommentsOfUrl: number;


  @Output() valueChange = new EventEmitter();
  @Output() numberOfComments = new EventEmitter();
  constructor(private redditService: RedditCommentsSentimentService,
    private communication: CommunicationService) { }

  ngOnInit() {

    this.redditService.getNumberOfComments(localStorage.getItem('user_id')).subscribe(data =>
      this.userComments = data

    );

    this.redditService.getUserUrls(localStorage.getItem('user_id')).subscribe(
      data => {
        this.userUrls = data;

      }
    );

    this.communication.numberOfComments$.subscribe(data =>
      this.userComments = data);

  }


  async deleteUrl(url: string) {
    await this.redditService.deleteUrl(localStorage.getItem('user_id'), url);

    this.redditService.getUserUrls(localStorage.getItem('user_id')).subscribe(
      data => {
        this.userUrls = data;

      });
  }

  ngDoCheck(): void {



  }

}
