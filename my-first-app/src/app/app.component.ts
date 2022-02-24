import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  myStr = "";
  count = 0;
  image_src = "../my-first-app/src/assets/images/barcelona.png";
  fname = "";
  lname = "";
  num=0;
  txt = ""
  item = 0;
  numarrays = [1,2,3,4];
  strarrays = ['Paresh', 'Ravi', 'Mahesh', 'Kevin', "Raj"];

  counter(){
    this.myStr = "This is my first Angular web app.";
    return this.count++;
  }

  show_child(){
    this.txt = "This is some text."
  }
  add_Item(){

  }

  items = ["Football", "Cricket", "Tennis", "Basketball"];
  

  cart_item_num = 0;
  
}