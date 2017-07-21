import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeoService {

  constructor(private http: Http) { }

  getAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + geoKey);
  }

  getLatlng(address: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + geoKey);
  }

}
