import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  from:any;
  to:any;
  age = 21;
  myForm:any;
  ngOnInit(): void {
  //   this.myForm = new FormGroup({
  //   fname: new FormControl("Paresh"),
  //   lname: new FormControl(''),
  //   city: new FormControl(''),
  //   age: new FormControl(''),
  //   phone: new FormControl('')
  // });


  this.myForm = this.fb.group({
    fname:['', Validators.required],
    lname:['', Validators.required],
    city:['', Validators.required],
    age:['', [Validators.min(18), Validators.required]],
    phone:['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
    from:['', Validators.required],
    to:['', [Validators.required, validDate(this.from, this.to)]]
  })

  function validDate(from: FormControl, to:FormControl) {
    let today = new Date().getTime();
    let fromdate = new Date(from.value).getTime();
    let todate = new Date(to.value).getTime();
    if(fromdate<today && fromdate>todate){
      return false;
    }
    else{
      return true;
    }

  }
}


  onSubmit(form: FormGroup){
    console.log("First Name", form.value.fname);
    console.log("Last Name", form.value.lname);
    console.log("City", form.value.city);
    console.log("Age", form.value.age);
    console.log("Phone", form.value.phone);
    console.log("From", form.value.from);
    console.log("To", form.value.to);
    console.log(this.calculatedays(form.value.from, form.value.to))
  }

  calculatedays(from:any, to:any){
    let fromdate:any = new Date(from).getTime();
    let todate:any = new Date(to).getTime();
    let days = (todate-fromdate)/(1000*3600*24)
    return days;
  }

}