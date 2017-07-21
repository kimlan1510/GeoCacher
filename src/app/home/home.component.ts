import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Geocache} from '../geocache.model';
import { FirebaseService} from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ FirebaseService]
})
export class HomeComponent{
  userList;
  user: User;
  constructor(private firebaseService: FirebaseService) { }

  userForm(name: string) {
    var newUser: User = new User(name);
    this.user = newUser;
    console.log(this.user.name);
    this.firebaseService.addUser(newUser);
  }

  cacheForm(cacheName: string, description: string, address: string){
    var newCache: Geocache = new Geocache(cacheName, description, address, this.user);
    this.firebaseService.addCache(newCache);
    alert("A Cache has been added to database!");
  }





}
