import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/Cita';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
    let correo=localStorage.getItem('CORREO');
    return this.http.get(`${this.API_URI}/citas/${correo}`); 
   }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/citas2/${id}`); 
   }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/citas/${id}`);
  }

  saveGame(paciente: Cita) {
    return this.http.post(`${this.API_URI}/citas`, paciente);
  }

  updateGame(id: string|number, updatedGame: Cita): Observable<Cita> {
    return this.http.put(`${this.API_URI}/citas/${id}`, updatedGame);
  }

}
