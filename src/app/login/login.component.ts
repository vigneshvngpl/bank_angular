import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
 

constructor(private rout:Router,private fb:FormBuilder,private db:DataService) {}
  ngOnInit(): void {

  }

  loginForm=this.fb.group({

    acno:["",[Validators.required,Validators.pattern("[0-9]+")]],
    psw:["",[Validators.required,Validators.pattern("[0-9a-zA-Z]+")]]

  })
login(){
  
 

  if(this.loginForm.valid){

this.db.loginApi(
  this.loginForm.value.acno,
  this.loginForm.value.psw).subscribe((result:any)=>{
    alert("login successful")

    this.rout.navigateByUrl("home")
  },
  result=>{
    alert(result.error.message)
  })

    
  }
  else{
    alert("invalid login")
  }

}

  

}
