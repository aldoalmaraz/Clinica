import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminCitas } from '../models/AdminCitas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCitasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/adminCitas`);

   }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/adminCitas2/${id}`); 
   }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/adminCitas/${id}`);
  }

  saveGame(paciente: AdminCitas) {
    return this.http.post(`${this.API_URI}/adminCitas`, paciente);
  }

  updateGame(id: string|number, updatedGame: AdminCitas): Observable<AdminCitas> {
    return this.http.put(`${this.API_URI}/adminCitas/${id}`, updatedGame);
  }

}
