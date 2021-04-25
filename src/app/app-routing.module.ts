import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { RdvComponent } from './rdv/rdv.component';

const routes: Routes = [
  { path: 'patient', component: PatientComponent },
  { path: 'rdv', component: RdvComponent },
  { path: '', component: PersonnelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }