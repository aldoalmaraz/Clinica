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
import { AdminloginGuard } from './admin-login.guard';
import { NoAdminLoginGuard } from './noadmin-login.guard';
import { AdminCitasListComponent } from './components/admin-citas-list/admin-citas-list.component';
import { AdminCitasFormComponent } from './components/admin-citas-form/admin-citas-form.component';
import { PersonalListComponent } from './components/personal-list/personal-list.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { ResumenClinicoFormComponent } from './components/resumenclinico/resumenclinico.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/pacientes',
    pathMatch: 'full'
  },
  {
    path: 'pacientes',
    component: PacientesListComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'pacientes/add',
    component: PacienteFormComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'pacientes/edit/:id',
    component: PacienteFormComponent,canActivate: [LoginGuard,AdminloginGuard]
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
    component: CitasListComponent,canActivate: [LoginGuard,NoAdminLoginGuard]
  },
  {
    path: 'citas/add',
    component: CitaFormComponent,canActivate: [LoginGuard,NoAdminLoginGuard]
  },
  {
    path: 'citas/edit/:id',
    component: CitaFormComponent,canActivate: [LoginGuard,NoAdminLoginGuard]
  },
  {
    path: 'doctores',
    component: DoctoresListComponent,canActivate: [LoginGuard,NoAdminLoginGuard]
  },
  {
    path: 'doctores/horarios/:id',
    component: doctoresHorarioComponent,canActivate: [LoginGuard,NoAdminLoginGuard]
  }
  ,
  {
    path: 'doctores/historial',
    component: HistorialComponent,canActivate: [LoginGuard,NoAdminLoginGuard]
  }
  ,
  {
    path: 'adminLogin',
    component: AdminLoginComponent 
  }
  ,
  {
    path: 'adminCitas',
    component: AdminCitasListComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'adminCitas/add',
    component: AdminCitasFormComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'adminCitas/edit/:id',
    component: AdminCitasFormComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'personal',
    component: PersonalListComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'personal/add',
    component: PersonalFormComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'personal/edit/:id',
    component: PersonalFormComponent,canActivate: [LoginGuard,AdminloginGuard]
  }
  ,
  {
    path: 'personal/edit/:id',
    component: PersonalFormComponent,canActivate: [LoginGuard,AdminloginGuard]
  },
  {
    path: 'pacientes/resumenClinico/:id',
    component: ResumenClinicoFormComponent,canActivate: [LoginGuard,AdminloginGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
