import { Component, OnInit } from '@angular/core';
declare var CKEDITOR:any;
@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    CKEDITOR.replace( 'editor1', { height: '500px', width: '100%' } );
  }

}
