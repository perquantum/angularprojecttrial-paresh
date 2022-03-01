import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-module',
  templateUrl: './reactive-form-module.component.html',
  styleUrls: ['./reactive-form-module.component.css']
})
export class ReactiveFormModuleComponent implements OnInit {

  constructor() { }

  myForm:any;
  ngOnInit(): void {
    this.myForm = new FormGroup({
    name: new FormControl("Paresh"),
    email: new FormControl(''),
    msg: new FormControl('')
  });
}


  onSubmit(form: FormGroup){
    console.log("Name", form.value.name);
    console.log("Enail", form.value.email);
    console.log("Message", form.value.msg);
  }

}