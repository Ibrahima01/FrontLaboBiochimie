import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { RdvComponent } from './rdv/rdv.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PatientGuardService } from './services/patient-guard.service';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AuthGuardService, PatientGuardService],
  },
  { path: 'rdv', component: RdvComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: '', component: PersonnelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
