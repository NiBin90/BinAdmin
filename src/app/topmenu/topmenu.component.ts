import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
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
