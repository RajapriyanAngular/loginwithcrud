import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private _fb:FormBuilder, private _http:HttpClient, private _router:Router){ }

  ngOnInit():void{ 
    this.signupForm=this._fb.group({
      firstName:[''],
      lastName:[''],
      mobile:[''],
      email:[''],
      password:[''],

    })
  }
  SignUp(){
      this._http.post("http://localhost:3000/signupUsers",this.signupForm.value)
      .subscribe((res)=>{
          alert('SignUp successful');
          this.signupForm.reset();
          this._router.navigate(['login']);
      },err=>{
        alert('Something Went Wrong')
      })

      }
  }
