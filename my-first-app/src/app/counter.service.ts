import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  value = 0;
  increment(flag:number){
    flag++;
    this.value = flag;
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