import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  //Step1: Create BehaviorSubject with default the value for subscriber first
  private userProfile = new BehaviorSubject<string>("CGI");

  //Step2: Create Observable for the BehaviorSubject.. so any component can subscribe to it.
  latestUserProfile = this.userProfile.asObservable();
  //latestUserProfile is subscribable

  constructor() { }
  UpdateProfileName(newProfileName)
  {
    console.log(newProfileName);
    this.userProfile.next(newProfileName)
  }
}
