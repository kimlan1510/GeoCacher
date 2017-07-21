import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css'],
  providers: [ GeoService ]
})
export class LocateComponent{
  location: string = null;

  constructor(private geoService: GeoService) { }

  getAddress(lat: string, lng: string){
    this.geoService.getAddress(lat, lng).subscribe(response => {
      this.location = response.json().results[0].formatted_address;
    });
  }

  getLatlng(address: string){
    this.geoService.getLatlng(address).subscribe(response => {
      this.location = response.json().results[0].geometry.location;
    });
  }



}
