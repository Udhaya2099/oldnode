import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authordata',
  templateUrl: './authordata.component.html',
  styleUrls: ['./authordata.component.css']
})
export class AuthordataComponent implements OnInit {
@Input() mydata:any
  constructor() { }

  ngOnInit(): void {
  }

}
