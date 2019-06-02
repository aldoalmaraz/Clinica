import { Component, OnInit, HostBinding } from '@angular/core';

import { CitasService } from '../../services/citas.service';
import { Cita } from 'src/app/models/Cita';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.css'],
})
export class CitasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  citas: any = [];

  constructor(private CitasService: CitasService) { }


  ngOnInit() {
    this.getGames();
  }

  getGames() {
  
    this.CitasService.getGames()
      .subscribe(
        res => {
          this.citas = res;
        
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.CitasService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.error(err)
      )
  }

}
