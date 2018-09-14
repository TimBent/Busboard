import { Component, OnInit } from '@angular/core';
import { Stop } from '../stop';
import { Bus } from '../bus';


@Component({
  selector: 'app-genric-stop-detail',
  templateUrl: './genric-stop-detail.component.html',
  styleUrls: ['./genric-stop-detail.component.css']
})
export class GenricStopDetailComponent implements OnInit {


Stop = new Stop("Morden Hall Park", 1 ,  "Wimbledon");
Bus = new Bus(118, "Brixton", "Normal");
Bus1 = new Bus(200, "Raynes Park", "Normal");
Bus2 = new Bus(198,  "Moisty Mire", "Normal");
Buses : Bus[] = [this.Bus, this.Bus1, this.Bus2];

  constructor() { }

  ngOnInit() {
  }

}
