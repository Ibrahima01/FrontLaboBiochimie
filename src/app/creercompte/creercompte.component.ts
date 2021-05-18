import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { User } from '../models/user';
import { CreerCompteService } from '../services/crrercompte.service';

@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.component.html',
  styleUrls: ['./creercompte.component.css']
})
export class CreercompteComponent implements OnInit {

  erreur1: any='';
  user: User=new User(0, "",'','PATIENT');
  constructor(private creercompteService: CreerCompteService) { }

  ngOnInit(): void {
  }

  patientACreer: Patient =new Patient(0, '','',0,'',false, false,'','',this.user)
  creer():void{
    this.patientACreer.user.role="PATIENT";
    this.creercompteService.creerPatient(this.patientACreer).subscribe(res=>{
      this.erreur1='no';
    },error=>{
      this.erreur1=error;
    })
  }

}
