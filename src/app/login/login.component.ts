import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HcauthService } from '../service/hcauth.service';
import { UserLogin } from '../classes/AllClasses';
import { UserServiceService } from '../service/data/user-service.service';
import { userID } from '../classes/userID';

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
    private authentication: HcauthService,
    private userservice2: UserServiceService) { }
   
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

    // RESTORE COMMENTS !!!!!
    // console.log(this.username)
    // console.log(this.password)
    // console.log(this.authentication.authenticate(this.username,this.password))
    
    // if (this.authentication.authenticate(this.username,this.password)){
    //   this.invalidLogin = false
    //   this.errmessage = 'Login Successful'
    //   this.router.navigate(['register',this.username])
    // }
    // else{
    //   this.invalidLogin = true
    // };

    var userID1 = new userID;
    userID1.id = 100;
    userID1.userId = 1;
    this.userservice2.userCheck(userID1).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log('Error in Call')
      })
  };
}
