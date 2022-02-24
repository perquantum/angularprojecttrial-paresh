import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  add = 0;
    @Output() newItemEvent = new EventEmitter<string>();
    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }

  addToCart(){
    
  }

}
