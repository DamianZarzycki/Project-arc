import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-link-list-item',
  templateUrl: './user-link-list-item.component.html',
  styleUrls: ['./user-link-list-item.component.scss']
})
export class UserLinkListItemComponent implements OnInit {

  @Input() url:string;

  constructor() { }

  ngOnInit() {
  }

}
