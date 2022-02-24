import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desc = false;
  show_description(){
    if(this.desc==false){
      this.desc = true;
    }
    else{
      this.desc=false;
    }
  }
}
