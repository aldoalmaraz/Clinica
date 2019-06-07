import { Component, OnInit, HostBinding } from '@angular/core';
import { Personal } from 'src/app/models/Personal';

import { PersonalService } from 'src/app/services/personal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  personal: Personal = {
    idPersonal: 0,
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Edad: '',
    Sexo: '',
    Correo: '',
    Celular: '',
    Domicilio: '',
    LugarNacimiento: '',
    Imagen: '',
    TipoPersonal: ''

  };

  edit: boolean = false;

  constructor(private personalService: PersonalService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.personalService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.personal = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
    delete this.personal.idPersonal;
    this.personalService.saveGame(this.personal)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/personal']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    this.personalService.updateGame(this.personal.idPersonal, this.personal)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/personal']);
        },
        err => console.error(err)
      )
  }

}
