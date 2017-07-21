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
  currentUser: User;
  notFoundCaches: Geocache[] = [];

  constructor(private geoService: GeoService, private firebaseService: FirebaseService) { }

  ngOnInit(){
    this.firebaseService.getUsers().subscribe(response => {
      this.currentUser = response[response.length - 1];
    });

    this.firebaseService.getCaches().subscribe(response => {
      console.log(response);
      for(let cache of response){
        if(cache.found == false){
          this.notFoundCaches.push(cache);
        }
      }
    })
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
