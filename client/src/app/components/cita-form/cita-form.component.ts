import { Component, OnInit, HostBinding } from '@angular/core';
import { Cita } from 'src/app/models/Cita';

import { CitasService } from 'src/app/services/citas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  cita: Cita = {
    idCitas: 0,
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo:'',
    Celular:'',
    Doctor:'',
    Hora:''



  };

  edit: boolean = false;

  constructor(private citaService: CitasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.citaService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.cita = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
   let correo=localStorage.getItem('CORREO');
   this.cita.Correo=correo;
   
    this.citaService.saveGame(this.cita)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/citas']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    
    this.citaService.updateGame(this.cita.idCitas, this.cita)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/citas']);
        },
        err => console.error(err)
      )
  }

}
