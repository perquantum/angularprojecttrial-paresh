import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  
  displayData:any;
  count = 0;
  constructor(public counter:CounterService) {
  this.counter.increment(this.count);

  this.displayData = this.counter.userData;
  console.log(this.displayData);
  }

  increment(){
    this.count = this.counter.increment(this.count);
  }

  ngOnInit(): void {
  }

}