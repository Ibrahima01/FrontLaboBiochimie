import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { RdvComponent } from './rdv/rdv.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PatientGuardService } from './services/patient-guard.service';
import { AdminGuardService } from './services/admin-gard.service';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { CreercompteComponent } from './creercompte/creercompte.component';
import { ParametreComponent } from './parametre/parametre.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NumboxComponent } from './numbox/numbox.component';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AuthGuardService, PatientGuardService],
  },
  {
    path: 'listePatient',
    component: ListePatientsComponent,
    
  },
  {
    path: 'creercompte',
    component: CreercompteComponent,
  },
  {
    path: 'configuration',
    component: ParametreComponent,
  },
  {
    path: 'commentaires',
    component: CommentairesComponent,
  },
  {
    path: 'historique',
    component: HistoriqueComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'presentation',
    component: PresentationComponent,
  },
  {
    path: 'numeroBox',
    component: NumboxComponent,
  },
  { path: 'rdv', component: RdvComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'personnel', component: PersonnelComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService, AdminGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
