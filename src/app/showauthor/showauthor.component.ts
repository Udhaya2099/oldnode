import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-showauthor',
  templateUrl: './showauthor.component.html',
  styleUrls: ['./showauthor.component.css']
})
export class ShowauthorComponent implements OnInit {
dataset:any
  constructor(private vs:MainService) { }

  ngOnInit(): void {
    this.vs.getAuthorapi().subscribe(
      {
        next: (data:any)=>this.dataset=data,
        error: (error:any)=>this.dataset=[]
      }
    )
  }

}
