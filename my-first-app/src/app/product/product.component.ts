import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // desc = false;
  // show_description(){
  //   if(this.desc==false){
  //     this.desc = true;
  //   }
  //   else{
  //     this.desc=false;
  //   }
  // }
  // ClickCounter = 0;
 
  // countChangedHandler(count: number) {
  //   this.ClickCounter = count;
  //   console.log(count);
  // }

  products = [
    {
      "id" : 101,
      "name" : "item1",
      "price" : 100,
      "quantity" : 0,
      "loc" : "Baroda"
    },
    {
      "id" : 102,
      "name" : "item2",
      "price" : 300,
      "quantity" : 0,
      "loc" : "Amreli"
    },
    {
      "id" : 103,
      "name" : "item3",
      "price" : 250,
      "quantity" : 0,
      "loc" : "Ahmedabad"
    },
    {
      "id" : 104,
      "name" : "item4",
      "price" : 750,
      "quantity" : 0,
      "loc" : "Mumbai"
    }
  ]

  quantity = 0;
  value = 0;
  tableIndex = 0;
  itemQuantity = 0;
  amount = 0;
  deatils:any = [];
  @Output() newItemEvent = new EventEmitter<any>();
  addItem(name: string, price: number, quantity: number ) {
    this.deatils = [name, price, quantity]
    this.amount = this.deatils.price*this.deatils.quantity;
    this.newItemEvent.emit(this.deatils);
  }
  decrement(value:number, index:number){
    value--;
    if(value<0){
      value=0;
    }
    let i = this.products.findIndex(x => x.id === index)
    this.products[i].quantity = value;
  }
  increment(value:number, index:number){
    value++;
    let i = this.products.findIndex(x => x.id === index)
    this.products[i].quantity = value;
  }

}