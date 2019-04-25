import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {
  //1. create FormGroup
  /*
  getInTouch = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),//'' - default value displayed on the form
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),

  });
  */

  //before constuctor -paste the following
  // 1. create FormGroup
    getInTouchForm = new FormGroup({ 
      // 2. create new FormControl for form fields
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [  
        Validators.required,
        Validators.email
      ]),  //3 - added email validators
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]) //4. password validators also added
    });
  
  constructor() { }

  ngOnInit() {
  }

}
