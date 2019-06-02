import { Component, OnInit, HostBinding } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';

import { PacientesService } from 'src/app/services/pacientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @HostBinding('class') clases = 'row';

paciente: Paciente = {
    id: 0,
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo: '',
    Password: '',
    Imagen: '',
    created_at: new Date()
  };

  constructor(private pacienteService: PacientesService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
  }

  registrar() {
    alert("SI ENTRA");
    delete this.paciente.created_at;
    this.pacienteService.saveGame(this.paciente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pacientes']);
        },
        err => console.error(err)
      )
  }
}
