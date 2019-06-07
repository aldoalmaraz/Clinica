import { Component, OnInit, HostBinding } from '@angular/core';

import { PersonalService } from '../../services/personal.service';
import { Personal } from 'src/app/models/personal';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})
export class PersonalListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  personal: any = [];

  constructor(private personalService: PersonalService) { }


  ngOnInit() {
    this.getGames();
  }

  getGames() {
  
    this.personalService.getGames()
      .subscribe(
        res => {
          this.personal = res;
        
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.personalService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.error(err)
      )
  }

}
