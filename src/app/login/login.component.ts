import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

constructor() {}
  ngOnInit(): void {

  }
login(){
  alert("login Clicked")
}
  unameChange(event:any){

    console.log(event.target.value);
    
  }

  

}
