import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataRequestService {

  constructor(private http:HttpClient) {}

  url = "http://localhost:3000/employees";

  getData(){
    return this.http.get(this.url);
  }
}
