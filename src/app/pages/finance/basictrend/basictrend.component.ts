import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'basictrend',
  templateUrl: './basictrend.component.html',
  styleUrls: ['./basictrend.component.css']
})
export class BasictrendComponent implements OnInit {
  stockId: string = '';
  stockName: string = '';
  show: boolean =false;
  constructor() { }

  ngOnInit() {
  }
 onUpdateStockId($event: Event) {
    this.stockId = (<HTMLInputElement>event.target).value;
  }
  ongetStockData() {
    var keyworld = this.stockId;
    $.ajax({
      url: 'http://hq.sinajs.cn/list=' + keyworld,
      type: 'GET',
      dataType: 'script',
      cache: true,
      success: function () {
        console.log(keyworld);
        var resultArr = eval('hq_str_' + keyworld).split(',');
        console.log(resultArr);
        this.stockName = resultArr[0];
        this.show = true;
        console.log(this.show);
      },
      error: function (err) {
        console.log(err);
      }
    });
  }
}
