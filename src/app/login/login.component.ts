import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { combineLatest } from 'rxjs';
import { Command } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  login(form:NgForm){
console.log(form.value);

if(form.value.email ==='doalfull@gmail.com' && form.value.contraseña ==='12345'){
localStorage.setItem('email', form.value.email);
 this.router.navigate(['/inicio']);}

}

  ngOnInit() {
  }

}
