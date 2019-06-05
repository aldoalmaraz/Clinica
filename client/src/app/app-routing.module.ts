import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesListComponent } from './components/pacientes-list/pacientes-list.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CitasListComponent } from './components/citas-list/citas-list.component';
import { CitaFormComponent } from './components/cita-form/cita-form.component';
import { DoctoresListComponent } from './components/doctores-list/doctores-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/pacientes',
    pathMatch: 'full'
  },
  {
    path: 'pacientes',
    component: PacientesListComponent
  },
  {
    path: 'pacientes/add',
    component: PacienteFormComponent
  },
  {
    path: 'pacientes/edit/:id',
    component: PacienteFormComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }

  ,
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'citas',
    component: CitasListComponent
  },
  {
    path: 'citas/add',
    component: CitaFormComponent
  },
  {
    path: 'citas/edit/:id',
    component: CitaFormComponent
  },
  {
    path: 'doctores',
    component: DoctoresListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
