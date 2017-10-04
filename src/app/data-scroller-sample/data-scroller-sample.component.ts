import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-scroller-sample',
  templateUrl: './data-scroller-sample.component.html',
  styleUrls: ['./data-scroller-sample.component.css']
})
export class DataScrollerSampleComponent implements OnInit {

  cars: any[];

  constructor() { }

  ngOnInit() {
      this.cars = [
        {
          id: 1,
          name: 'foo',
        },
        {
          id: 2,
          name: 'bar',
        },
      ]
  }
  
}
