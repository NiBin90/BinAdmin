import { Component, OnInit } from '@angular/core';
import { event } from './dataEvent.module';
import * as moment from 'moment';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    this.initialize_calendar();
  }

  initialize_calendar = function () {
    $('#calendar').fullCalendar({
      //defaultDate: '2014-06-12',
header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: event
		});
  }

}
