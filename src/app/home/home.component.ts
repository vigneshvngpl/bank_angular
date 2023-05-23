import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
user:any
acno:any
balance:any
userObject:any
uname:any
date:any

//display  status
transactionStatus:any

//to change color
tStatus:any

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder,private datepipe:DatePipe){}

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

  //balance
  getBalance(){
    this.acno=localStorage.getItem("currentAcno")
    this.ds.balanceApi(this.acno).subscribe((result:any)=>{
    this.balance=result.message
    console.log(this.balance);
  })
  }
  //user details
  getUser(){
this.acno=localStorage.getItem("currentAcno")
this.ds.getUserApi(this.acno).subscribe((result:any)=>{

  {
  this.userObject=result.message
  this.user=this.userObject.uname
  this.acno=this.userObject.acno
  
  }
  
})
  }

  //model form for amount transfer
  moneyTransferForm=this.fb.group({
    toAcno:["",[Validators.required,Validators.pattern('[0-9]+')]],
    amount:["",[Validators.required,Validators.pattern('[0-9]+')]],
    psw:["",[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
    
  })
fundTransfer(){
  if(this.moneyTransferForm.valid){

    //to apply date and time
    this.date=new Date()

    //to take date and time from date

    let latest_date=this.datepipe.transform(this.date,'short')
    console.log(latest_date);

    //get acno from local storage
    this.acno=localStorage.getItem("currentAcno")

    //taking arguments from model file
    let toAcno=this.moneyTransferForm.value.toAcno
    let amnt=this.moneyTransferForm.value.amount
    let psw=this.moneyTransferForm.value.psw

// To avoid sending money to same account
if(this.acno==toAcno){
  this.transactionStatus="From and to account same"
  
  //to change color of text in front end
  this.tStatus=false
}
else{
  //giving arguments for created api and geting response
  this.ds.fundTransfer(toAcno,this.acno,amnt,psw,latest_date).subscribe(
    (result:any)=>{
      console.log(result.message);
      this.transactionStatus=result.message
      this.tStatus=true
      
    },
    result=>{
      console.log(result.error.message);
      this.transactionStatus=result.error.message
      this.tStatus=false
    }
  )
}


    
  }
  else{
    alert("invalid form")
    this.tStatus=false
  }

}

    
  }


