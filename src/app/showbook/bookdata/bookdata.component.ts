import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdata',
  templateUrl: './bookdata.component.html',
  styleUrls: ['./bookdata.component.css']
})
export class BookdataComponent implements OnInit {
@Input() mydata:any
  constructor() { }

  ngOnInit(): void {
  }

}
