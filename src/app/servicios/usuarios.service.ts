import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios = [
    {id: 1, nombre: 'Andres', apellido: 'Velasquez'},
    {id: 2, nombre: 'Aldo', apellido: 'Almaraz'},
    ];
  constructor() { }

  getUsuarios(){
return this.usuarios

  }
  getUsuario(id:number){
return this.getUsuarios().find( usuario => usuario.id === id);
  }
}
