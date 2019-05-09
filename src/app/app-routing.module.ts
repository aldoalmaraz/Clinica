import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NologinGuard } from './nologin.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginGuard } from './login.guard';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {path :'login', component: LoginComponent, canActivate: [NologinGuard]},
  {path :'usuarios', component: UsuariosComponent, canActivate: [LoginGuard]},
  {path :'inicio', component: InicioComponent},
  {path :'usuarios/:id' , component: UsuarioComponent,canActivate:[LoginGuard]},
  {path :'**',pathMatch: 'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
