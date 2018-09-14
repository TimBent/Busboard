import { Component, OnInit, Input } from '@angular/core';
import { Stop } from '../stop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genric-stop-detail',
  templateUrl: './genric-stop-detail.component.html',
  styleUrls: ['./genric-stop-detail.component.css']
})
export class GenricStopDetailComponent implements OnInit {

  @Input() stop: Stop;

  ngOnInit() {
    activatedRoute.snapshot.paramMap.get('id')
  }

}