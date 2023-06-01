import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private _fb:FormBuilder, private _http:HttpClient, private _router:Router){}

  ngOnInit():void{
    this.loginForm = this._fb.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this._http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert('Login Successful');
        this.loginForm.reset();
        this._router.navigate(['dashboard']);
      }
      else{
        alert("Email or password is incorrect!! ");
      }
    },err=>{
      alert("Something went wrong");
    })
  }

}
