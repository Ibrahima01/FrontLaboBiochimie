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

  hasError: boolean= false;
  message: string = '';
  user: User=new User(0, "",'','PATIENT');
  constructor(private creercompteService: CreerCompteService) { }

  ngOnInit(): void {
  }

  patientACreer: Patient =new Patient(0, '','',0,'',false, false,'','',this.user)
  creer():void{
    this.hasError = false;
    this.message = '';
    this.patientACreer.user.role="PATIENT";
    this.creercompteService.creerPatient(this.patientACreer).subscribe(res=>{
      this.hasError = false;
      this.message = 'Compte créee avec succèss';
    }, (error: any) => {
      console.log("error", error)
      this.hasError = true;
      this.message = error.error;
    })
  }

}
