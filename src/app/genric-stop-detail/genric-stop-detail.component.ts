import { Component, OnInit, Input } from '@angular/core';
import { Stop } from '../stop';
import { Bus } from '../bus';
import { Arrival } from '../arrival';



@Component({
  selector: 'app-genric-stop-detail',
  templateUrl: './genric-stop-detail.component.html',
  styleUrls: ['./genric-stop-detail.component.css']
})
export class GenricStopDetailComponent implements OnInit {

  @Input() stop: Stop;

  constructor() { }

  ngOnInit() {
    console.log(this.stop);
  }

}
