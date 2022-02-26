import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count = 0;
 
  @Input() ClickCounter = '';
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  increment() {
      this.count++;
      this.countChanged.emit(this.count);
    }
  decrement() {
      this.count--;
      this.countChanged.emit(this.count);
  }

}
