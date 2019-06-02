import { Component, OnInit, HostBinding } from '@angular/core';

import { PacientesService } from '../../services/pacientes.service';
import { Paciente } from 'src/app/models/Paciente';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css'],
})
export class PacientesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  pacientes: any = [];

  constructor(private pacientesService: PacientesService) { }


  ngOnInit() {
    this.getGames();
  }

  getGames() {
  
    this.pacientesService.getGames()
      .subscribe(
        res => {
          this.pacientes = res;
        
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.pacientesService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.error(err)
      )
  }

}
