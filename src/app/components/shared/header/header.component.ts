import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/service/common/user-account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profileName: string;

  constructor(private userAccountService: UserAccountService) {
    this.userAccountService.latestUserProfile.subscribe(value => {
      console.log(value);
      this.profileName = value;
    })
  }

  ngOnInit() {
  }

}
