import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  
  constructor(private http: HttpClient) { 
    debugger;
  }

  getContacts()
  {
    debugger;
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .pipe(map((resp) => {
      console.log(resp);
      return resp
    }))
  }
}
