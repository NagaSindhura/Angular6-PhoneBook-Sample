import { Component, OnInit } from '@angular/core';
import { GetAllContactsService } from 'src/app/service/contact/get-all-contacts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  submissionStatus: string;

  constructor(private contactService: GetAllContactsService) { }

  ngOnInit() { }

  onSubmitHandler(formData: NgForm) {
    console.log(formData);
    //if..else dirty/not /
    console.log(formData.value);

    //2. send the data to service 
    this.contactService.addContact(formData.value)
      .subscribe(resp => { //3. receive the resp from service 
        console.log(resp);
        console.log("Saved Successfully!");
        //if else 
        //4. channelise it back to html 
        this.submissionStatus = "Saved Successfully!"
      })


  }

}
