import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor(){
    let dt = new Date();
    return dt;
  }
}