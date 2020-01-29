import { Component, OnInit, DoCheck } from '@angular/core';
import { RedditCommentsSentimentService } from 'src/app/services/reddit-comments-sentiment.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommunicationService } from 'src/app/services/communication.service';
import { BigqueryService } from 'src/app/services/bigquery.service';

@Component({
  selector: 'app-user-link-add',
  templateUrl: './user-link-add.component.html',
  styleUrls: ['./user-link-add.component.scss']
})
export class UserLinkAddComponent implements OnInit, DoCheck {



  isLoading = false;

  constructor(private redditService: RedditCommentsSentimentService,
    private fb: FormBuilder, private communication: CommunicationService, private bigqueryService: BigqueryService) { }


  inputForm: FormGroup;

  async addUrl() {

    this.isLoading = true;
    localStorage.setItem('url', this.inputForm.get('input').value);
    await this.redditService.addUrlToUser(localStorage.getItem('user_id'), this.inputForm.get('input').value);


  }
  ngOnInit() {
    this.inputForm = this.fb.group({
      input: ['', Validators.required],
    });
  }



  ngDoCheck(): void {
    this.communication.messageSent$.subscribe(data =>
      this.isLoading = data);
  }

}
