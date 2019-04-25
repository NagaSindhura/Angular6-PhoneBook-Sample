import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/service/common/user-account.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  profileName: string;
  newProfileName: string;
  profileSubscription: Subscription;

  constructor(private userAccountService: UserAccountService) {
    this. profileSubscription = this.userAccountService.latestUserProfile.subscribe(value => {
      console.log(value);
      this.profileName = value;
    })
  }

  ngOnInit() {
  }

  updateNameHandler() {
    console.log(this.newProfileName);
    this.userAccountService.UpdateProfileName(this.newProfileName);
  }

  ngOnDestroy()
  {
    console.log("On Destroy");
    this.profileSubscription.unsubscribe();
  }

}
