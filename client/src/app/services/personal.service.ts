import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personal } from '../models/Personal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/personal`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/personal/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/personal/${id}`);
  }

  saveGame(personal: Personal) {
    return this.http.post(`${this.API_URI}/personal`, personal);
  }

  updateGame(id: string|number, updatedGame: Personal): Observable<Personal> {
    return this.http.put(`${this.API_URI}/personal/${id}`, updatedGame);
  }

}
