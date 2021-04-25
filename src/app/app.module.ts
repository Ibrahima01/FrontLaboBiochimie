import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { AdminComponent } from './admin/admin.component';
import { AbsenceComponent } from './absence/absence.component';
import { ParametreComponent } from './parametre/parametre.component';
import { RdvComponent } from './rdv/rdv.component';
import { PatientService } from './services/patient.service';
import { RdvService } from './services/rdv.service';
import { PersonnelService } from './services/personnel.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PatientGuardService } from './services/patient-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PersonnelComponent,
    AdminComponent,
    AbsenceComponent,
    ParametreComponent,
    RdvComponent,
    LoginComponent,
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    PatientService,
    RdvService,
    PersonnelService,
    LoginService,
    AuthGuardService,
    PatientGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
