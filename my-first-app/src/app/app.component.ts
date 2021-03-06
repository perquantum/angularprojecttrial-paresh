import { Component } from '@angular/core';
import { CounterService } from './counter.service';
// import { AnyMxRecord } from 'dns';
import { DateTimeService } from './date-time.service';
import { UserInfoService } from './user-info.service';
import { HttpClient } from '@angular/common/http';
import { observable, Subscriber } from 'rxjs';
import { HttpDataRequestService } from './http-data-request.service';
import { AnyForUntypedForms, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

constructor(private ht:HttpDataRequestService){}

details:any;
result:any;
ngOnInit(){
  this.ht.getData().subscribe(data => console.log(data));
}

show(data:any){
    this.result=data;
  }

  id="";
  fname="";
  lname="";
  email="";

  getDetails(id:any){
    alert(typeof(id)+id);
    console.log(id);
    this.id=this.result[id-1].id;
    this.fname=this.result[id-1].first_name;
    this.lname=this.result[id-1].last_name;
    this.email=this.result[id-1].email;
  }
}



  // getDate:any;
  // count = 0;

  // constructor(private today:DateTimeService, private getUserInfo:UserInfoService, public counter:CounterService){
  //   this.getDate = this.today;
  // }
  
  // clickToIncrement(value:any){
  //   this.count = this.counter.increment(value);
  // }
 
  
  // userInfo = this.getUserInfo.userData;
  // inputValue:any = '';

  // users={
  //   "email":"",
  //   "password":"",
  //   "checkbox":""
  // }

  // onSubmit(value:any){
  //   this.users = value;
  //   this.counter.sendData(this.users);
  // }

  // ans:any= [];
  // i = 0;

  // showTable(num:any){
  //   this.ans = [];
  //   for(let j=0; j<=10; j++){
  //   let i = num*j;
  //   this.ans.push(i);
  //   }
  // }





  
  // from:any;
  // to:any;
  // price:any;

  // showDetails(from:any, to:any, price:any){
  //   this.from=new Date(from).getTime();
  //   this.to=new Date(to).getTime();
  //   let diff = (this.to-this.from)/(1000*3600*24);
  //   this.price = price;
  //   console.log("Total amount for trip of " + diff + " days is "+ (this.price)*diff);
  // }






  // title = 'my-first-app';
  // myStr = "";
  // count = 0;
  // image_src = "../my-first-app/src/assets/images/barcelona.png";
  // fname = "";
  // lname = "";
  // num=0;
  // txt = ""
  // item = 0;
  // numarrays = [1,2,3,4];
  // strarrays = ['Paresh', 'Ravi', 'Mahesh', 'Kevin', "Raj"];

  // counter(){
  //   this.myStr = "This is my first Angular web app.";
  //   return this.count++;
  // }

  // show_child(){
  //   this.txt = "This is some text."
  // }
  // add_Item(){

  // }

  // items = ["Football", "Cricket", "Tennis", "Basketball"];
  

  // cart_item_num = 0;


  // item = 9;
  // flag = false;
  // enable(){
  //   this.flag = true;
  // }
  // disable(){
  //   this.flag = false;
  // }

  // data = [
  //   {
  //     "id": 1,
  //     "name": "Leanne Graham",
  //     "username": "Bret",
  //     "email": "Sincere@april.biz",
  //     "address": {
  //       "street": "Kulas Light",
  //       "suite": "Apt. 556",
  //       "city": "Gwenborough",
  //       "zipcode": "92998-3874",
  //       "geo": {
  //         "lat": "-37.3159",
  //         "lng": "81.1496"
  //       }
  //     },
  //     "phone": "1-770-736-8031 x56442",
  //     "website": "hildegard.org",
  //     "company": {
  //       "name": "Romaguera-Crona",
  //       "catchPhrase": "Multi-layered client-server neural-net",
  //       "bs": "harness real-time e-markets"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "name": "Ervin Howell",
  //     "username": "Antonette",
  //     "email": "Shanna@melissa.tv",
  //     "address": {
  //       "street": "Victor Plains",
  //       "suite": "Suite 879",
  //       "city": "Wisokyburgh",
  //       "zipcode": "90566-7771",
  //       "geo": {
  //         "lat": "-43.9509",
  //         "lng": "-34.4618"
  //       }
  //     },
  //     "phone": "010-692-6593 x09125",
  //     "website": "anastasia.net",
  //     "company": {
  //       "name": "Deckow-Crist",
  //       "catchPhrase": "Proactive didactic contingency",
  //       "bs": "synergize scalable supply-chains"
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "name": "Clementine Bauch",
  //     "username": "Samantha",
  //     "email": "Nathan@yesenia.net",
  //     "address": {
  //       "street": "Douglas Extension",
  //       "suite": "Suite 847",
  //       "city": "McKenziehaven",
  //       "zipcode": "59590-4157",
  //       "geo": {
  //         "lat": "-68.6102",
  //         "lng": "-47.0653"
  //       }
  //     },
  //     "phone": "1-463-123-4447",
  //     "website": "ramiro.info",
  //     "company": {
  //       "name": "Romaguera-Jacobson",
  //       "catchPhrase": "Face to face bifurcated interface",
  //       "bs": "e-enable strategic applications"
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "name": "Patricia Lebsack",
  //     "username": "Karianne",
  //     "email": "Julianne.OConner@kory.org",
  //     "address": {
  //       "street": "Hoeger Mall",
  //       "suite": "Apt. 692",
  //       "city": "South Elvis",
  //       "zipcode": "53919-4257",
  //       "geo": {
  //         "lat": "29.4572",
  //         "lng": "-164.2990"
  //       }
  //     },
  //     "phone": "493-170-9623 x156",
  //     "website": "kale.biz",
  //     "company": {
  //       "name": "Robel-Corkery",
  //       "catchPhrase": "Multi-tiered zero tolerance productivity",
  //       "bs": "transition cutting-edge web services"
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "name": "Chelsey Dietrich",
  //     "username": "Kamren",
  //     "email": "Lucio_Hettinger@annie.ca",
  //     "address": {
  //       "street": "Skiles Walks",
  //       "suite": "Suite 351",
  //       "city": "Roscoeview",
  //       "zipcode": "33263",
  //       "geo": {
  //         "lat": "-31.8129",
  //         "lng": "62.5342"
  //       }
  //     },
  //     "phone": "(254)954-1289",
  //     "website": "demarco.info",
  //     "company": {
  //       "name": "Keebler LLC",
  //       "catchPhrase": "User-centric fault-tolerant solution",
  //       "bs": "revolutionize end-to-end systems"
  //     }
  //   },
  //   {
  //     "id": 6,
  //     "name": "Mrs. Dennis Schulist",
  //     "username": "Leopoldo_Corkery",
  //     "email": "Karley_Dach@jasper.info",
  //     "address": {
  //       "street": "Norberto Crossing",
  //       "suite": "Apt. 950",
  //       "city": "South Christy",
  //       "zipcode": "23505-1337",
  //       "geo": {
  //         "lat": "-71.4197",
  //         "lng": "71.7478"
  //       }
  //     },
  //     "phone": "1-477-935-8478 x6430",
  //     "website": "ola.org",
  //     "company": {
  //       "name": "Considine-Lockman",
  //       "catchPhrase": "Synchronised bottom-line interface",
  //       "bs": "e-enable innovative applications"
  //     }
  //   },
  //   {
  //     "id": 7,
  //     "name": "Kurtis Weissnat",
  //     "username": "Elwyn.Skiles",
  //     "email": "Telly.Hoeger@billy.biz",
  //     "address": {
  //       "street": "Rex Trail",
  //       "suite": "Suite 280",
  //       "city": "Howemouth",
  //       "zipcode": "58804-1099",
  //       "geo": {
  //         "lat": "24.8918",
  //         "lng": "21.8984"
  //       }
  //     },
  //     "phone": "210.067.6132",
  //     "website": "elvis.io",
  //     "company": {
  //       "name": "Johns Group",
  //       "catchPhrase": "Configurable multimedia task-force",
  //       "bs": "generate enterprise e-tailers"
  //     }
  //   },
  //   {
  //     "id": 8,
  //     "name": "Nicholas Runolfsdottir V",
  //     "username": "Maxime_Nienow",
  //     "email": "Sherwood@rosamond.me",
  //     "address": {
  //       "street": "Ellsworth Summit",
  //       "suite": "Suite 729",
  //       "city": "Aliyaview",
  //       "zipcode": "45169",
  //       "geo": {
  //         "lat": "-14.3990",
  //         "lng": "-120.7677"
  //       }
  //     },
  //     "phone": "586.493.6943 x140",
  //     "website": "jacynthe.com",
  //     "company": {
  //       "name": "Abernathy Group",
  //       "catchPhrase": "Implemented secondary concept",
  //       "bs": "e-enable extensible e-tailers"
  //     }
  //   },
  //   {
  //     "id": 9,
  //     "name": "Glenna Reichert",
  //     "username": "Delphine",
  //     "email": "Chaim_McDermott@dana.io",
  //     "address": {
  //       "street": "Dayna Park",
  //       "suite": "Suite 449",
  //       "city": "Bartholomebury",
  //       "zipcode": "76495-3109",
  //       "geo": {
  //         "lat": "24.6463",
  //         "lng": "-168.8889"
  //       }
  //     },
  //     "phone": "(775)976-6794 x41206",
  //     "website": "conrad.com",
  //     "company": {
  //       "name": "Yost and Sons",
  //       "catchPhrase": "Switchable contextually-based project",
  //       "bs": "aggregate real-time technologies"
  //     }
  //   },
  //   {
  //     "id": 10,
  //     "name": "Clementina DuBuque",
  //     "username": "Moriah.Stanton",
  //     "email": "Rey.Padberg@karina.biz",
  //     "address": {
  //       "street": "Kattie Turnpike",
  //       "suite": "Suite 198",
  //       "city": "Lebsackbury",
  //       "zipcode": "31428-2261",
  //       "geo": {
  //         "lat": "-38.2386",
  //         "lng": "57.2232"
  //       }
  //     },
  //     "phone": "024-648-3804",
  //     "website": "ambrose.net",
  //     "company": {
  //       "name": "Hoeger LLC",
  //       "catchPhrase": "Centralized empowering task-force",
  //       "bs": "target end-to-end models"
  //     }
  //   }
  // ]

  // row = true;

  // removeItem(d:any){
  //   let index = this.data.indexOf(d);
  //   this.data = this.data.splice(index);
  //   }



  // totalItems = 0;
  // totalAmount = 0;
  // details:any = [];
  // addDetails(detail: any) {
  //   this.details.push(detail);
  //   let cost = detail[1]*detail[2];
  //   this.totalItems++;
  //   this.totalAmount = this.totalAmount + cost;
  // }