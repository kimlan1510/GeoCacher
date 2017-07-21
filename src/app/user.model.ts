import { Geocache } from './geocache.model';

export class User {
  public geocacheFound: any[] = ["geocache found"];
  public geocacheCreated: any[] = ["geocache created"];
  constructor(public name: string){}
}
