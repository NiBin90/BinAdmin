import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'realtimequote',
  templateUrl: './realtimequote.component.html',
  styleUrls: ['./realtimequote.component.css']
})
export class RealtimequoteComponent implements OnInit {

  options: Object;
  stockId: string = '';
  constructor() {
    this.options = {
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

  ngOnInit() {
    // this.getStockData();
  }
}
