import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from 'src/app/directives/contact/contactservice.service';
import { GetAllContactsService } from 'src/app/service/contact/get-all-contacts.service';
import { IContact } from 'src/app/interfaces/icontact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {

  contactList: IContact[];
  constructor( private contactService: GetAllContactsService) {
    
  }

  ngOnInit() {
    
    //connect to service
    this.contactService.getContacts()
    .subscribe(
      (resp: IContact[] )=> {
        console.log(resp);

        //loop thru *ngFor
        this.contactList = resp;

        console.log(this.contactList);
      }
    );
  }

}
