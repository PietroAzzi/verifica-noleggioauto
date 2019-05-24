import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-driving-detail',
  templateUrl: './driving-detail.component.html',
  styleUrls: ['./driving-detail.component.css']
})
export class DrivingDetailComponent implements OnInit {

  @Input() mezzo;

  constructor() { }

  ngOnInit() {
  }

}
