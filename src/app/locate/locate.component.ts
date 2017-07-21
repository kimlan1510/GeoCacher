import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-locate',
  templateUrl: './locate.component.html',
  styleUrls: ['./locate.component.css']
})
export class LocateComponent{
  location: string = null;

  constructor(private geoService: GeoService) { }

  getAddess(lat: string, lng: string){
    
  }



}
