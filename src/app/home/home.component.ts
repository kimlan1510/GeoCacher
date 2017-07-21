import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Geocache} from '../geocache.model';
import { FirebaseService} from '../firebase.service';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ FirebaseService,  GeoService]
})
export class HomeComponent{
  userList;
  user: User;
  userInFirebase;
  coordinates;
  constructor(private firebaseService: FirebaseService, private geoService: GeoService) { }

  userForm(name: string) {
    var newUser: User = new User(name);
    this.user = newUser;
    this.firebaseService.addUser(newUser);
  }

  cacheForm(cacheName: string, description: string, address: string){
    this.firebaseService.getUsers().subscribe(response => {
      this.userInFirebase = response[response.length - 1];
      console.log(this.userInFirebase);
      console.log(this.userInFirebase.$key);
      var newCache: Geocache = new Geocache(cacheName, description, address, this.userInFirebase.$key);
      this.firebaseService.addCache(newCache);
      alert("A Cache has been added to database!");
    });
  }

  getLatlng(address: string){
    this.geoService.getLatlng(address).subscribe(response => {
      this.coordinates = response.json().results[0].geometry.location;
      alert("Cache's location: Latitude:" + this.coordinates.lat +" " + "Longitude: " + this.coordinates.lng);
    });
  }





}
