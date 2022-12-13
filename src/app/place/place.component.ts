import { Component, OnInit } from '@angular/core';

export class Place {
  id: number | undefined;
  name: string | undefined;
  location: string |undefined;
}

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html'
})

export class PlaceComponent implements OnInit {
  //create a mock place object for display in the html
  /*place: Place = {
    id: 1,
    name: 'Waterfront Trail',
    location: 'Barrie'
  }*/

  places:Place[] = [
    {id: 100, name: 'Waterfront Traill', location: 'Barrie'},
    {id: 101, name: 'Scenic Caves', location: 'Toronto0'},
    {id: 102, name: 'Niagra falls',location: 'Niagra'}
  ]
  constructor(){ }

  ngOnInit(): void {
       
  }

}
