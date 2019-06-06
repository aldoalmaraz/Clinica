import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/adminLogin.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminLogin } from 'src/app/models/AdminLogin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminLoginService: AdminLoginService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  adminLogin: AdminLogin = {
    idAdmins: 0,
    Nombre: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo: '',
    Password: '',
    Imagen: '',
    Access:'',
    created_at: new Date()
  };

 Login() {
    delete this.adminLogin.created_at;
    delete this.adminLogin.Nombre;
    delete this.adminLogin.ApellidoPaterno;
    delete this.adminLogin.ApellidoMaterno;
    delete this.adminLogin.Imagen;

    

    this.adminLoginService.LoginUser(this.adminLogin)
      .subscribe(
        res => {
          console.log(res);
          if(res=="No existe"){
          this.router.navigate(['/adminLogin']);
          }else{
            this.adminLogin.Access='admin';
            this.router.navigate(['/pacientes']);
            localStorage.setItem("CORREO",this.adminLogin.Correo);
            localStorage.setItem("ACCESS",this.adminLogin.Access);
       
          }
        },
        err => console.error(err)
      )
  }

}
