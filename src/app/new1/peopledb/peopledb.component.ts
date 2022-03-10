import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-peopledb',
  templateUrl: './peopledb.component.html',
  styleUrls: ['./peopledb.component.css']
})
export class PeopledbComponent implements OnInit {
 @Input() mydata:any
  constructor() { }

  ngOnInit(): void {
  }

}
