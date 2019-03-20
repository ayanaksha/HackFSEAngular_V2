import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HcauthService } from '../service/hcauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username'
  password = 'password'
  errmessage = "Invalid Credentials"
  invalidLogin = false

  constructor(private router: Router,
    private authentication: HcauthService) { }
   
  ngOnInit() {
  }

  handleLogin(){
    console.log('Login processing......')
    console.log(this.username)
    // console.log('Login processing......')
    // console.log(this.password)
    // if(this.username === 'ayanaksha' && this.password === 'password123'){
    //   this.invalidLogin = false
    //   this.errmessage = 'Login Successful'
    //   this.router.navigate(['register',this.username])
    // }
    // else{
    //   this.invalidLogin = true
    // }
    console.log(this.username)
    console.log(this.password)
    console.log(this.authentication.authenticate(this.username,this.password))
    
    if (this.authentication.authenticate(this.username,this.password)){
      this.invalidLogin = false
      this.errmessage = 'Login Successful'
      this.router.navigate(['register',this.username])
    }
    else{
      this.invalidLogin = true
    }
  }
}
