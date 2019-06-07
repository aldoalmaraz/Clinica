import { Component, OnInit, HostBinding } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';

import { PacientesService } from 'src/app/services/pacientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resumenclinico',
  templateUrl: './resumenclinico.component.html',
  styleUrls: ['./resumenclinico.component.css']
})

export class ResumenClinicoFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  paciente: Paciente = {
    id: 0,
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo:'',
    Imagen: '',
    created_at: new Date(),
    EnfermedadesCronicas:'',
    ResumenClinico:''
  };

  edit: boolean = false;

  constructor(private pacienteService: PacientesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.pacienteService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.paciente = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    delete this.paciente.created_at;
    delete this.paciente.id;
    this.pacienteService.saveGame(this.paciente)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/pacientes']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    delete this.paciente.created_at;
    this.pacienteService.updateGame(this.paciente.id, this.paciente)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/pacientes']);
        },
        err => console.error(err)
      )
  }

}
