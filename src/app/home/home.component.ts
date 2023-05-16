import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
user:any
  constructor(private router:Router){}

  ngOnInit():void{

    //.........................................................

    if(!localStorage.getItem("currentAcno")){
      this.router.navigateByUrl("")
      alert("login first")
    }
    //......................................................

this.user=localStorage.getItem("currentUser")


  }



  logout(){

    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl("")
  }

}
