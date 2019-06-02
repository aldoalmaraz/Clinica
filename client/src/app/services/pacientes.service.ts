import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/Paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/pacientes`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/pacientes/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/pacientes/${id}`);
  }

  saveGame(paciente: Paciente) {
    return this.http.post(`${this.API_URI}/pacientes`, paciente);
  }

  LoginUser(paciente: Paciente) {
    return this.http.post(`${this.API_URI}/login`, paciente); 
  }


  updateGame(id: string|number, updatedGame: Paciente): Observable<Paciente> {
    return this.http.put(`${this.API_URI}/pacientes/${id}`, updatedGame);
  }

}
