import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RouterModule, Routes} from '@angular/router';
import { UsuariosService } from './servicios/usuarios.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NologinGuard } from './nologin.guard';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path :'login', component: LoginComponent, canActivate: [NologinGuard]},
  {path :'usuarios', component: UsuariosComponent, canActivate: [LoginGuard]},
  {path :'inicio', component: InicioComponent},
  {path :'usuarios/:id' , component: UsuarioComponent,canActivate:[LoginGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioComponent,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuariosService,LoginGuard,NologinGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
