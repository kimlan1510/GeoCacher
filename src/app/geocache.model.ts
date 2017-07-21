import { User } from './user.model';

export class Geocache {
  public found: boolean = false;
  constructor(public name: string, public description: string,  public address: string, public lat: string, public lng: string, public creator: User){}
}
