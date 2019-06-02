import { Component, OnInit } from '@angular/core';
import { bloomHasToken } from '@angular/core/src/render3/di';
import { getBootstrapListener } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

CerrarSesion(){
  let hola;
  hola=localStorage.getItem('CORREO');
 let hola2="";

if( hola==null){
alert("No logueado")
localStorage.setItem("CORREO",hola2);
}else{alert("logueado con exito");

}
}



}
