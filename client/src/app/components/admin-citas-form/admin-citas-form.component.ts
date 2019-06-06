import { Component, OnInit, HostBinding } from '@angular/core';
import { AdminCitas } from 'src/app/models/AdminCitas';

import { AdminCitasService } from 'src/app/services/adminCitas.Service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-citas-form',
  templateUrl: './admin-citas-form.component.html',
  styleUrls: ['./admin-citas-form.component.css']
})
export class AdminCitasFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  adminCitas: AdminCitas = {
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

  constructor(private adminCitasService: AdminCitasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.adminCitasService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.adminCitas = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewGame() {
   
    this.adminCitasService.saveGame(this.adminCitas)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/adminCitas']);
        },
        err => console.error(err)
      )
  }

  updateGame() {
    
    this.adminCitasService.updateGame(this.adminCitas.idCitas, this.adminCitas)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/adminCitas']);
        },
        err => console.error(err)
      )
  }

}
