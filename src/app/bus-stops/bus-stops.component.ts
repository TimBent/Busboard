import { Component, OnInit, Input } from '@angular/core';
import { Stop } from '../stop';
import { Arrival } from '../arrival'
import { Bus } from '../bus'


@Component({
  selector: 'app-bus-stops',
  templateUrl: './bus-stops.component.html',
  styleUrls: ['./bus-stops.component.css']
})
export class BusStopsComponent implements OnInit {

 Bus = new Bus(118, "Brixton", "Normal");
 Bus1 = new Bus(200, "Raynes Park", "Normal");  
 Bus2 = new Bus(198,  "Moisty Mire", "Normal");
 Buses : Bus[] = [this.Bus, this.Bus1, this.Bus2];

 firstArrival:Arrival = new Arrival (this.Bus,2);
 secondArrival:Arrival = new Arrival (this.Bus1,9);
 thirdArrival:Arrival = new Arrival (this.Bus2,15);

  Arrivals: Arrival[] = [this.firstArrival, this.secondArrival, this.thirdArrival];

  MStop = new Stop("Morden Hall Park", 1 ,  "Wimbledon", this.Arrivals);
  HStop = new Stop("ColliersWood", 2 ,  "Wimbledon", this.Arrivals);
  KStop = new Stop("Mitcham Palace", 3 ,  "Wimbledon", this.Arrivals);
  selectedBusStop = new Stop("", 0, "", []);

  Stops: Stop[] = [this.MStop, this.KStop, this.HStop];

  constructor() { }

  stopss: Stop;

  ngOnInit() {
  }

  onClickStopName( selectedStop : Stop): void{
    this.stopss = selectedStop;
  }

}
