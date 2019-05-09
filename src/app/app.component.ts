import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clinica';

  constructor(private router: Router){}
  cerrarSession(){
localStorage.removeItem('email');
this.router.navigate(['/login']);

  }
}

