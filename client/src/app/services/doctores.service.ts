import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctores } from '../models/Doctores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
  
    return this.http.get(`${this.API_URI}/doctores`); 
   }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/doctores/${id}`); 
   }


}
