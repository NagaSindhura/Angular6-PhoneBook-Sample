import { Component, OnInit } from '@angular/core';
import { GetAllContactsService } from 'src/app/service/contact/get-all-contacts.service';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/interfaces/icontact';
declare var $: any;

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: IContact;
  contactId: string;
  editContactData: IContact;

  constructor(private _contactService: GetAllContactsService, private _activateRoute: ActivatedRoute) {
    this.contactId = this._activateRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    //read url param to get id
    //pass the same to service method
    this._contactService.getContactById(this.contactId)
      .subscribe((resp: IContact) => {
        console.log(resp);
        this.contactData = resp;
      })


  }

  editModalClickHandler() {
    //open modal thru js 
    $('#editModal').modal('show');
    //duplicating object, just not to alter the actual object and is kind of mocking object
    this.editContactData = JSON.parse(JSON.stringify(this.contactData));
  }


}
