import { User } from './user.model';

export class Geocache {
  public found: boolean = false;
  constructor(public name: string, public description: string,  public address: string, public creator: User){}
}
