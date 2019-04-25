import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IContact } from 'src/app/interfaces/icontact';

@Injectable({
  providedIn: 'root'
})
export class GetAllContactsService {
  private _restApriUrl: string="https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {
    
  }

  addContact(contactData: any): Observable<IContact> {
    return this.http.post("https://jsonplaceholder.typicode.com/users/", contactData)
      .pipe(map((resp: IContact) => {
        console.log(resp);
        return resp
      }));
  }

  getContacts(): Observable<IContact[]> {
    
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .pipe(
        map((resp: IContact[]) => resp),
        catchError(err => {
          console.log("Cought up with error", err);
          return throwError(err);
        })
      );


  }

  getContactById(contactid: string) {
    debugger;
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + contactid)
      .pipe(map((resp: IContact) => {
        console.log(resp);
        return resp
      }));
  }

  updateContact(contactData)
  //:Observable<IContact>
  {
    return this.http.put("https://jsonplaceholder.typicode.com/users/",contactData)
    .pipe(
      map(
        (resp: IContact) => {
          
        }
      )
    )
  }
}
