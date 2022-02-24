import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coffee-header',
  templateUrl: './coffee-header.component.html',
  styleUrls: ['./coffee-header.component.css']
})
export class CoffeeHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  item = 0;
  @Input() count = '';

  @Output() newItemEvent = new EventEmitter<string>();
    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }


}
