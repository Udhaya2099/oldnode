import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  getAuthorapi():Observable<object>
  {
    return this.http.get("http://localhost:4000/authorapi/authors")
  }
  getBookapi():Observable<object>
  {
    return this.http.get("http://localhost:4000/bookapi/books")
  }

  getPeopleapi():Observable<object>
  {
    return this.http.get("http://localhost:4000/peopleapi/all")
  }
}

