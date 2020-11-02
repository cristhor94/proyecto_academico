import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService,]
})
export class RegisterComponent implements OnInit {
  registerForm= new FormGroup({
    email: new FormControl(''),
    password : new FormControl(''),
    Nombres : new FormControl(''),
  });
  constructor(private  authSvc:AuthService) { }

  ngOnInit(): void {}

  onRegister(){
  const {email,password} =  this.registerForm.value;

   this.authSvc.register(email,password);
  }

}
