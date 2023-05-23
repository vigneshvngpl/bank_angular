import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  user:any
  acno:any
  date:any
  transaction:any
constructor(private ds:DataService){}

  ngOnInit(): void {
    this.user=localStorage.getItem("currentUser")
    this.acno=localStorage.getItem("currentAcno")
    this.date=new Date()


    //transaction
    this.ds.transactionHistory(this.acno).subscribe((result:any)=>{
      this.transaction=result.message
      console.log(this.transaction);
      
    })
    
  }

  

}
