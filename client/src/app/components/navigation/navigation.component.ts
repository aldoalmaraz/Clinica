import { Component, OnInit } from '@angular/core';
import { bloomHasToken } from '@angular/core/src/render3/di';
import { getBootstrapListener } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

CerrarSesion(){
  localStorage.removeItem('CORREO');
  this.router.navigate(['/login']);
  
}


}
