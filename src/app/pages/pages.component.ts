import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isClosed : boolean= false;

  constructor() { }

  ngOnInit() {
  }
 hamburger_cross() {
    let trigger = $('.hamburger');

    if (this.isClosed == true) {
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      this.isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      this.isClosed = true;
    }
    $('#wrapper').toggleClass('toggled');
  }
}
