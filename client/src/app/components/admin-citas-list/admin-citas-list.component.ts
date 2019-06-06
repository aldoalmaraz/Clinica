import { Component, OnInit, HostBinding } from '@angular/core';

import { AdminCitasService } from '../../services/adminCitas.Service';
import { AdminCitas } from 'src/app/models/AdminCitas';

@Component({
  selector: 'app-admin-citas-list',
  templateUrl: './admin-citas-list.component.html',
  styleUrls: ['./admin-citas-list.component.css']
})
export class AdminCitasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  adminCitas: any = [];

  constructor(private adminCitasService: AdminCitasService) { }


  ngOnInit() {
    this.getGames();
  }

  getGames() {
  
    this.adminCitasService.getGames()
      .subscribe(
        res => {
          this.adminCitas = res;
        
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.adminCitasService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.error(err)
      )
  }

}
