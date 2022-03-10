import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.css']
})
export class New1Component implements OnInit {
dataid:any
  constructor(private vs:MainService) { }

  ngOnInit(): void {
    this.vs.getPeopleapi().subscribe(
      {
        next: (data:any)=>this.dataid=data,
        error:(error:any)=>this.dataid=[]
      }
    )
  }

}
