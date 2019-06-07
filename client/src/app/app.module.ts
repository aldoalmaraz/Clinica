import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PacientesListComponent } from './components/pacientes-list/pacientes-list.component';

// Services
import { PacientesService } from './services/pacientes.service';
import { CitasService } from './services/citas.service';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CitaFormComponent } from './components/cita-form/cita-form.component';
import { CitasListComponent } from './components/citas-list/citas-list.component';
import { DoctoresService } from './services/doctores.service';
import { DoctoresListComponent } from './components/doctores-list/doctores-list.component';
import { doctoresHorarioComponent } from './components/doctores-horario/doctores-horario.component';
import { LoginGuard } from './login.guard';
import { NologinGuard } from './nologin.guard';
import { HistorialComponent } from './components/historial/historial.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminNavigationComponent } from './components/admin-navigation/admin-navigation.component';
import { AdminloginGuard } from './admin-login.guard';
import { NoAdminLoginGuard } from './noadmin-login.guard';
import { AdminCitasListComponent } from './components/admin-citas-list/admin-citas-list.component';
import { AdminCitasFormComponent } from './components/admin-citas-form/admin-citas-form.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { PersonalListComponent } from './components/personal-list/personal-list.component';
import { PersonalService } from './services/personal.service';
import { AdminLoginService } from './services/adminLogin.service';
import { ResumenClinicoFormComponent } from './components/resumenclinico/resumenclinico.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PacientesListComponent,
    PacienteFormComponent,
    LoginComponent,
    RegisterComponent,
    CitaFormComponent,
    CitasListComponent,
    DoctoresListComponent,
    doctoresHorarioComponent,
    HistorialComponent,
    AdminLoginComponent,
    AdminNavigationComponent,
    AdminCitasListComponent,
    AdminCitasFormComponent,
    PersonalFormComponent,
    PersonalListComponent,
    ResumenClinicoFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PacientesService,
    CitasService,
    DoctoresService,
    LoginGuard,
    NologinGuard,
    AdminloginGuard,
    NoAdminLoginGuard,
    PersonalService,
    AdminLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
