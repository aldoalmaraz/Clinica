import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminLogin } from '../models/AdminLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }



  LoginUser(adminlogin: AdminLogin) {
    return this.http.post(`${this.API_URI}/login`, adminlogin); 
  }
  
 



}
