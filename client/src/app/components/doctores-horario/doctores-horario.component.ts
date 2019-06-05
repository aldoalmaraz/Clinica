import { Component, OnInit, HostBinding } from '@angular/core';
import { Horario } from 'src/app/models/Horario';

import { DoctoresService } from 'src/app/services/doctores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctores-horario',
  templateUrl: './doctores-horario.component.html',
  styleUrls: ['./doctores-horario.component.css']
})
export class doctoresHorarioComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  horario: Horario = {
    idHorarios: 0,
    Consultorio: '',
    FechaHora: new Date(),
    idPersonal:0

  };

  edit: boolean = false;

  constructor(private doctoresService: DoctoresService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.doctoresService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.horario = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }



}
