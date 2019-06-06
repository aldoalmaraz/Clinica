import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../models/Historial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  
  getGame2() {
    let correo=localStorage.getItem('CORREO');
    return this.http.get(`${this.API_URI}/historial/NumCitas/${correo}`);
 }


   getGame() {
     let correo=localStorage.getItem('CORREO');
    return this.http.get(`${this.API_URI}/historial/${correo}`);
  }


}
