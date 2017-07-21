import { Geocache } from './geocache.model';

export class User {
  public geocacheFound: Geocache[] = [];
  public geocacheCreated: Geocache[] = [];
  constructor(public name: string){}
}
