import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.css']
})
export class ShowbookComponent implements OnInit {
dataid:any
  constructor(private vs:MainService) { }

  ngOnInit(): void {
    this.vs.getBookapi().subscribe(
      {
        next: (data:any)=>this.dataid=data,
        error:(error:any)=>this.dataid=[]
      }
        )
      }
    
  }


