import { Component, OnInit } from '@angular/core';
import { Stop } from '../stop';

@Component({
  selector: 'app-bus-stops',
  templateUrl: './bus-stops.component.html',
  styleUrls: ['./bus-stops.component.css']
})
export class BusStopsComponent implements OnInit {

  MStop = new Stop("Morden Hall Park", 1 ,  "Wimbledon");
  HStop = new Stop("ColliersWood", 2 ,  "Wimbledon");
  KStop = new Stop("Mitcham Palace", 3 ,  "Wimbledon");

  constructor() { }

  ngOnInit() {
  }

}
