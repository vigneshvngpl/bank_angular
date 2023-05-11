import { Component } from '@angular/core';
import { FormArrayName, FormBuilder, Validators } from '@angular/forms';

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
constructor(private fb:FormBuilder){}


registerForm=this.fb.group({

  acno:["",[Validators.required,Validators.pattern("[0-9]+")]],
  uname:["",[Validators.required,Validators.pattern("[a-zA-Z]+")]],
  psw:["",[Validators.required,Validators.pattern("[0-9a-zA-Z]+")]],
  cpsw:["",[Validators.required,Validators.pattern("[0-9a-zA-Z]+")]]
})
register(){

  if(this.registerForm.valid){
    if(this.registerForm.value.psw==this.registerForm.value.cpsw){
      alert("register works")
    }
    else{
      alert("Password mismatch")
    }

    
  }
  else{
    alert("invalid form")
  }

}


  
}
