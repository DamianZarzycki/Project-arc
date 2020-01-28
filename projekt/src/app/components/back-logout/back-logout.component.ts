import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-back-logout',
  templateUrl: './back-logout.component.html',
  styleUrls: ['./back-logout.component.scss']
})
export class BackLogoutComponent implements OnInit {

  constructor(private authService: AuthService) { }


  onClick(){
    this.authService.logOut();
  }

  ngOnInit() {
  }

}
