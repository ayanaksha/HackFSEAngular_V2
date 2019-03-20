import { Injectable } from '@angular/core';
import { UserServiceService } from "../service/data/user-service.service";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HcauthService {
  
  constructor(private userservice1: UserServiceService,
    private http:HttpClient) { }
  
  authenticate(username,password){
    // console.log('before ' + this.isUserLoggedIn())
    this.userservice1.validateAndLogin(username).subscribe(
      data => {
        console.log(data);
        return true;
      },
        error => {
          return false;
        });
    
    // Correct Hard Coded Implementation**************
    // if(username === 'ayanaksha' && password === 'password123'){
    //   sessionStorage.setItem('auth',username)
    //   // console.log('after ' + this.isUserLoggedIn())s
    //   return true
    // }
    // else{
    //   return false
    // }
  }

  // isUserLoggedIn(username){
  //   if(sessionStorage.getItem('auth') === username){
  //     return true
  //   }
  // }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('auth')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('auth');   
  }
}
