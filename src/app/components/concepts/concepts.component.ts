import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  profileLoadedHandler( value )//Step5: received the data from $event
  {
    console.log(value);
  }
}
