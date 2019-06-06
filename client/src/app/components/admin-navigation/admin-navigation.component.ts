import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }



  CerrarSesion(){
    localStorage.removeItem('CORREO');
    localStorage.removeItem('ACCESS');
    this.router.navigate(['/adminLogin']);
    
  }
  
}
