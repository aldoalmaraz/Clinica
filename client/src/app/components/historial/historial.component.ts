import { Component, OnInit, HostBinding } from '@angular/core';
import { Historial } from 'src/app/models/Historial';
import { NumCitas } from 'src/app/models/NumCitas';

import { HistorialService } from 'src/app/services/historial.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  historial: Historial = {
    idCitas: 0,
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo:'',
    Password:'',
    Imagen:'',
    Access:'',
    created_at: new Date()
   

  };
  numCitas: NumCitas = {
    NumCitas: ''
   

  };
  

  


  edit: boolean = false;

  constructor(private historialService: HistorialService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

      this.historialService.getGame()
        .subscribe(
          res => {
            console.log(res);
            this.historial = res;
            this.edit = true;
          },
          err => console.log(err)
        )


        this.historialService.getGame2()
        .subscribe(
          res => {
            console.log(res);
            this.numCitas.NumCitas=res.toString();           
            this.edit = true;
          },
          err => console.log(err)
        )
       
    
  }


  



}
