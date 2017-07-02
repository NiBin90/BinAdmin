import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  options: Object;
  stockId: string = '';
  constructor() {
  }

  ngOnInit() {
  }

}
