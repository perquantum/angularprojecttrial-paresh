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
  image_src = "../src/assets/images/barcelona.png";

  counter(){
    this.myStr = "This is my first Angular web app.";
    return this.count++;
  }
}
