import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('myForm')form:NgForm;
  title = 'RegisterForm';
  defaultCountry="2020";
  fullName:string="";
  email:string="";
  defaultSubscribe="yes";
  defaultCreateApp="yes";
  createApp=[{id:"1",value:"yes"},
  {id:"2",value:"No"},{id:"3",value:"Maybe"}];
  subscribe=[{id:"1",value:"yes"},
  {id:"2",value:"No"}];
  submit(){
    console.log(this.form)
    this.form.reset();
    alert("your Request is submitted ")
  }
  onSubmit(register){
    console.log(register);
    this.http.post('https://registrationform-aed6f-default-rtdb.firebaseio.com/register.json',register)
    .subscribe((res)=>console.log(res));
  }
  setvalue(){
    this.form.setValue({
      DedicatedApp: "",
course: "",
email: "sai@gmail.com",
fullName: "sai sarvesh",
year: "",
yesForSub: ""
    })
  }

  constructor(private http:HttpClient){
   

  }
}
