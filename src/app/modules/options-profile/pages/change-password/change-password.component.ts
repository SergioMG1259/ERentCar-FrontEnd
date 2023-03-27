import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from 'src/app/modules/form-extensions/validators/password-must-be-equal';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPasswordShow:boolean=false
  newPasswordShow:boolean=false
  confirmPasswordShow:boolean=false
  password:string=""
  changePasswordForm=new FormGroup({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
  },passwordsMustBeEqual);
  
  constructor() { 

  }

  get oldPasswordControl(){
    return this.changePasswordForm.get('oldPassword') as FormControl;
  }
  get newPasswordControl(){
    return this.changePasswordForm.get('newPassword') as FormControl;
  }
  get confirmPasswordControl(){
    return this.changePasswordForm.get('confirmPassword') as FormControl;
  }
  click(){
   console.log("A") 
  }

  ngOnInit(): void {
  }

}
