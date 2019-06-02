import { Component, OnInit } from '@angular/core';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pacienteService: PacientesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  paciente: Paciente = {
    id: 0,
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo: '',
    Password: '',
    Imagen: '',
    created_at: new Date()
  };

 Login() {
    delete this.paciente.created_at;
    delete this.paciente.Nombre;
    delete this.paciente.ApellidoPaterno;
    delete this.paciente.ApellidoMaterno;
    delete this.paciente.Imagen;

    

    this.pacienteService.LoginUser(this.paciente)
      .subscribe(
        res => {
          console.log(res);
          if(res=="No existe"){
          this.router.navigate(['/login']);
          }else{
            this.router.navigate(['/pacientes']);
            localStorage.setItem("CORREO",this.paciente.Correo);


          }
        },
        err => console.error(err)
      )
  }

}
