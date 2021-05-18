import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { ROLE } from '../models/role.enum';
import { RdvService } from '../services/rdv.service';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  
  idPatient: number=1;
  erreur1: any='';
  erreur2: any='';
  user: User=new User(0, "",'','PATIENT');
  credentials: Credentials = new Credentials('', '');
  //var img=new HTMLImageElement();
  patientACreer: Patient =new Patient(0, '','',0,'',false, false,'','',this.user);

  constructor(private patientService: PatientService, private rdvService: RdvService, private route:ActivatedRoute) { }

  patients: Patient[]=[];
  findPatient: Patient=new Patient(0, '','',0,'',false, false,'','',this.user);
  email: string='';
  password: string='';
  existe: boolean=false;

  ngOnInit(): void {
    //this.getPatients();
  }

  getPatients(): void{
    this.patientService.getPatients().subscribe(res=>{
      this.patients=res
    });
    console.log(this.patients);
  }

  creer():void{
    this.patientService.creerPatient(this.patientACreer).subscribe(res=>{
      this.erreur1='no';
    },error=>{
      this.erreur1=error;
    })
  }
/*
  prendreRDV(): void{
    this.rdvService.prendreRDVPatient(this.patientACreer).subscribe(res=>{
      this.erreur2='no';
    }, error=>{
      this.erreur2=error;
    })
  }
  */
  afficher(): void{
    this.patientService.getPatientByid(this.idPatient).subscribe(res => {
      this.findPatient = res;})
  }
  afficherPatient(): void {
    this.rdvService.getPatient(this.credentials.username).subscribe(res=>{
      this.patientACreer=res;
    })
  }
  supprimer(): void{
    this.patientService.deletePatient(this.idPatient).subscribe(res=>{this.findPatient=res;})
  }
  /*
  authentifier(): void{
    this.patientService.authentification(this.email, this.password).subscribe(res=>{
      this.existe=res;
    })
  }
  */
}
