import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Geocache } from './geocache.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  users: FirebaseListObservable<any[]>;
  caches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
    this.caches = database.list('caches');
  }

  getUsers(){
    return this.users;
  }

  getCaches(){
    return this.caches;
  }

  getUserById(userId: string){
    return this.database.object('/users/' + userId);
  }

  getCacheById(cacheId: string){
    return this.database.object('/caches/' + cacheId);
  }

  addUser(newUser: User){
    this.users.push(newUser);
  }

  addCache(newCache: Geocache){
    this.caches.push(newCache);
  }

  updateCache(cache, currentUser){
    const cacheInDatabase = this.getCacheById(cache.$key);
    const userInDatabase = this.getUserById(currentUser.$key);
    cacheInDatabase.update({found: true})
    userInDatabase.update({geocacheFound: currentUser.geocacheFound});
  }

  updateUser(currentUser){
    const userInDatabase = this.getUserById(currentUser.$key);
    userInDatabase.update({geocacheCreated: currentUser.geocacheCreated});
  }
}
