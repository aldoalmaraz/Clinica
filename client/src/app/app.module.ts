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
    NologinGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
