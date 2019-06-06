import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAdminLoginGuard implements CanActivate{
  constructor(private router: Router){}
canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('ACCESS') === 'admin'){
      this.router.navigate(['/pacientes']);
      alert("USTED NO ES UN USUARIO CLIENTE!");
      return false;
         }
         else{
        
          return true;
         }
  }
}  