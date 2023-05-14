import { Component } from '@angular/core';
import { FormArrayName, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//   acno:any
//  uname:any
//  psw:any

ngOnInit():void{
  
}

pswCheck:any=false

constructor(private fb:FormBuilder,private ds:DataService,private router:Router ){}


registerForm=this.fb.group({

  acno:["",[Validators.required,Validators.pattern("[0-9]+")]],
  uname:["",[Validators.required,Validators.pattern("[a-zA-Z]+")]],
  psw:["",[Validators.required,Validators.pattern("[0-9a-zA-Z]+")]],
  cpsw:["",[Validators.required,Validators.pattern("[0-9a-zA-Z]+")]]
})
register(){

  if(this.registerForm.valid){
    if(this.registerForm.value.psw==this.registerForm.value.cpsw){
      this.ds.registerApi(
        this.registerForm.value.acno,
        this.registerForm.value.uname,
        this.registerForm.value.psw ).subscribe((result:any)=>{

alert(result.message);
this.router.navigateByUrl("")


        },
        result=>{
          alert(result.error.message)
        })
    }
    else{
      this.pswCheck=true
    }

    
  }
  else{
    alert("invalid form")
  }

}


  
}
