import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:any
  psw:any
 

constructor(private rout:Router) {}
  ngOnInit(): void {

  }
login(){
  
  this.rout.navigateByUrl("home")

}

  

}
