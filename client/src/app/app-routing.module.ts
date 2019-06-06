import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesListComponent } from './components/pacientes-list/pacientes-list.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CitasListComponent } from './components/citas-list/citas-list.component';
import { CitaFormComponent } from './components/cita-form/cita-form.component';
import { DoctoresListComponent } from './components/doctores-list/doctores-list.component';
import { doctoresHorarioComponent } from './components/doctores-horario/doctores-horario.component';
import { NologinGuard } from './nologin.guard';
import { LoginGuard } from './login.guard';
import { HistorialComponent } from './components/historial/historial.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pacientes',
    pathMatch: 'full'
  },
  {
    path: 'pacientes',
    component: PacientesListComponent,canActivate: [LoginGuard]
  },
  {
    path: 'pacientes/add',
    component: PacienteFormComponent,canActivate: [LoginGuard]
  },
  {
    path: 'pacientes/edit/:id',
    component: PacienteFormComponent,canActivate: [LoginGuard]
  }
  ,
  {
    path: 'login',
    component: LoginComponent,canActivate: [NologinGuard]
  }

  ,
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'citas',
    component: CitasListComponent,canActivate: [LoginGuard]
  },
  {
    path: 'citas/add',
    component: CitaFormComponent,canActivate: [LoginGuard]
  },
  {
    path: 'citas/edit/:id',
    component: CitaFormComponent,canActivate: [LoginGuard]
  },
  {
    path: 'doctores',
    component: DoctoresListComponent,canActivate: [LoginGuard]
  },
  {
    path: 'doctores/horarios/:id',
    component: doctoresHorarioComponent,canActivate: [LoginGuard]
  }
  ,
  {
    path: 'doctores/historial',
    component: HistorialComponent,canActivate: [LoginGuard]
  }
  ,
  {
    path: 'adminLogin',
    component: AdminLoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
