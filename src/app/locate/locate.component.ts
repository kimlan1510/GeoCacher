import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';
import { FirebaseService } from '../firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { User } from '../user.model';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css'],
  providers: [ GeoService, FirebaseService ]
})
export class LocateComponent implements OnInit {
  location;
  coordinates;

  constructor(private geoService: GeoService, private firebaseService: FirebaseService) { }

  ngOnInit(){
    
  }

  getAddress(lat: string, lng: string){
    this.geoService.getAddress(lat, lng).subscribe(response => {
      this.location = response.json().results[0];
      console.log(this.location);
    });
  }

  getLatlng(address: string){
    this.geoService.getLatlng(address).subscribe(response => {
      this.coordinates = response.json().results[0].geometry.location;
      console.log(this.coordinates);
    });
  }



}
