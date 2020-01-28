import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RedditCommentsSentimentService } from 'src/app/services/reddit-comments-sentiment.service';

@Component({
  selector: 'app-user-link-list-item',
  templateUrl: './user-link-list-item.component.html',
  styleUrls: ['./user-link-list-item.component.scss']
})
export class UserLinkListItemComponent implements OnInit {

  @Input() url: string;
  @Output() urlComments: EventEmitter<any> = new EventEmitter();

  numberOfComments: number;

  numberOfCommentsOfUrl;

  constructor(private redditService: RedditCommentsSentimentService) { }

  ngOnInit() {
    this.redditService.getNumberOfCommentsOfUrl(localStorage.getItem('user_id'), this.url).subscribe(data => {
      this.numberOfCommentsOfUrl = data;

    }
    );
  }

}
