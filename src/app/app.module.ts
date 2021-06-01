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
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListePatientsComponent } from './liste-patients/liste-patients.component';
import { ListeRDVComponent } from './liste-rdv/liste-rdv.component';
import { HistoriqueComponent } from './historique/historique.component';
import { StatistiqueJourComponent } from './statistique-jour/statistique-jour.component';
import { StatistiqueAnneeComponent } from './statistique-annee/statistique-annee.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { ListePatientService } from './services/liste-patient.service';
import { CreercompteComponent } from './creercompte/creercompte.component';
import { CreerCompteService } from './services/crrercompte.service';
import { ParametreService } from './services/parametre.service';
import { CommentaireService } from './services/commentaire.service';
import { HistoriqueService } from './services/historique.service';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './services/contacts.service';
import { PresentationService } from './services/presentation.service';

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
    MenuComponent,
    ListePatientsComponent,
    ListeRDVComponent,
    HistoriqueComponent,
    StatistiqueJourComponent,
    StatistiqueAnneeComponent,
    CommentairesComponent,
    CreercompteComponent,
    PresentationComponent,
    ContactsComponent,
  ],
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    LoginService,
    PatientService,
    RdvService,
    PersonnelService,
    ListePatientService,
    CreerCompteService,
    ParametreService,
    CommentaireService,
    HistoriqueService,
    ContactsService,
    PresentationService,
    LoginService,
    AuthGuardService,
    PatientGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
