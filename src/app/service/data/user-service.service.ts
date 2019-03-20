import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  LoginEndPoint: string;

  constructor(private http:HttpClient) { }

  validateAndLogin(newUser) {
    const url = "http://localhost:8081" + "/login";
    return this.http.post(url, newUser);
  }  
}
