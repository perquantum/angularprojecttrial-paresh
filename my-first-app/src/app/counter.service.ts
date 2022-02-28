import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  
  increment(flag:number){
    flag++;
    return flag;
  }
  copyText(textValue:string){
    return textValue;
  }


  
  userData={}
  sendData(values:any){
    this.userData = values;
    console.log(this.userData);
  }
}