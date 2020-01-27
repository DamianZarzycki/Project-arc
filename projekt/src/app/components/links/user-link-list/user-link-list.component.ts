import { Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { RedditCommentsSentimentService } from 'src/app/services/reddit-comments-sentiment.service';

@Component({
  selector: 'app-user-link-list',
  templateUrl: './user-link-list.component.html',
  styleUrls: ['./user-link-list.component.scss']
})
export class UserLinkListComponent implements OnInit, AfterViewInit {

  userUrls;
  @Output() valueChange = new EventEmitter();
  constructor(private redditService: RedditCommentsSentimentService) { }

  ngOnInit() {
    this.redditService.getUserUrls(localStorage.getItem('user_id')).subscribe(
      data =>
        {
          this.userUrls = data;
          this.valueChange.emit(data.length);
          console.log(data.length);
          

        }
    );
  }

  ngAfterViewInit(): void {
    this.redditService.getUserUrls(localStorage.getItem('user_id')).subscribe(
      data =>
        this.userUrls = data
    );
  }

}
