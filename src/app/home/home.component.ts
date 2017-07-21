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
  currentUser;
  user: User;
  coordinates;
  constructor(private firebaseService: FirebaseService, private geoService: GeoService) { }

  userForm(name: string) {
    var newUser: User = new User(name);
    this.user = newUser;
    this.firebaseService.addUser(newUser);
    this.firebaseService.getUsers().subscribe(response => {
      this.currentUser = response[response.length -1];
    });
  }

  cacheForm(cacheName: string, description: string, address: string){
    console.log(this.currentUser.$key);
    var newCache = new Geocache(cacheName, description, address, this.currentUser.$key);
    this.firebaseService.addCache(newCache);
    this.currentUser.geocacheCreated.push(newCache);
    this.firebaseService.updateUser(this.currentUser);
    console.log(this.currentUser)
    alert("A Cache has been added to database!");
  }

  getLatlng(address: string){
    this.geoService.getLatlng(address).subscribe(response => {
      this.coordinates = response.json().results[0].geometry.location;
      alert("Cache's location: Latitude:" + this.coordinates.lat +" " + "Longitude: " + this.coordinates.lng);
    });
  }





}
