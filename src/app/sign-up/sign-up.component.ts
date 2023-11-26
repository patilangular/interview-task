import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm!:FormGroup

  constructor(private fb:FormBuilder,private http:HttpserviceService){
 
  }
 
  ngOnInit(){
    this.createForm();
  }
 
  createForm(){
    this.signUpForm = this.fb.group({
     'name':[''],
     'mobileNo':[''],
     'email':[''],
     'password':['']
    })
  }
 
  signUp(){
   console.log(this.signUpForm.value);
   this.http.postDataToServer('users',this.signUpForm.value).subscribe(
     (response:any)=>{
       console.log(response);
     },
     (error:any)=>{
     }
     )
  }
 }

