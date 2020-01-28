import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RedditCommentsSentimentService } from 'src/app/services/reddit-comments-sentiment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-link-comments',
  templateUrl: './user-link-comments.component.html',
  styleUrls: ['./user-link-comments.component.scss']
})
export class UserLinkCommentsComponent implements OnInit {

  constructor(private redditService: RedditCommentsSentimentService, private route: ActivatedRoute, ) { }

  @Output() numberOfComments: EventEmitter<any> = new EventEmitter();
  urlLink: string;
  comments = [];

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      this.urlLink = params.get('url');
      this.getComments();
    });



  }

  getComments() {
    this.redditService.getUserUrlComments(localStorage.getItem('user_id'), this.urlLink)
      .subscribe(data => {
        this.comments = data.sort((n1, n2) => n1.score - n2.score);
        this.numberOfComments.emit(this.comments.length)
      });

  }
}
