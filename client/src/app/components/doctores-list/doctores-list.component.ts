import { Component, OnInit, HostBinding } from '@angular/core';

import { DoctoresService } from '../../services/doctores.service';
import { Doctores } from 'src/app/models/Doctores';


@Component({
  selector: 'app-doctores-list',
  templateUrl: './doctores-list.component.html',
  styleUrls: ['./doctores-list.component.css']
})
export class DoctoresListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  doctores: any = [];



  constructor(private doctoresService: DoctoresService) { }


  ngOnInit() {
    this.getGames();
  }

  getGames() {
  
    this.doctoresService.getGames()
      .subscribe(
        res => {
          this.doctores = res;
        
        },
        err => console.error(err)
      );
  }

 

}
