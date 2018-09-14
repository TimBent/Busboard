import { Injectable } from '@angular/core';
import { Stop } from './stop';
import { Bus } from './bus';
import { Arrival } from './arrival';

@Injectable({
  providedIn: 'root'
})
export class RetrieveStopsService {

  constructor() { }
    
    StopList: Stop[];

    Bus = new Bus(118, "Brixton", "Normal");
    Bus1 = new Bus(200, "Raynes Park", "Normal");  
    Bus2 = new Bus(198,  "Moisty Mire", "Normal");
    Buses : Bus[] = [this.Bus, this.Bus1, this.Bus2];
   
    firstArrival:Arrival = new Arrival (this.Bus,2);
    secondArrival:Arrival = new Arrival (this.Bus1,9);
    thirdArrival:Arrival = new Arrival (this.Bus2,15);
   
     Arrivals: Arrival[] = [this.firstArrival, this.secondArrival, this.thirdArrival];
   
     MStop = new Stop("Morden Hall Park", "1" ,  "Wimbledon", this.Arrivals);
     HStop = new Stop("ColliersWood", "2" ,  "Wimbledon", this.Arrivals);
     KStop = new Stop("Mitcham Palace", "3" ,  "Wimbledon", this.Arrivals);
     selectedBusStop = new Stop("", "0", "", []);
   
     Stops: Stop[] = [this.MStop, this.KStop, this.HStop];

  getStops(): Stop[] {
    return this.Stops;
  }

  getStopInformation(n: string, id: string, d: string, ar: [] ): void {
    let newStops = new Stop(n, id, d, ar);
    this.Stops.push(newStops);
  }

}
