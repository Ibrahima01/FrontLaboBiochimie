import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import {RdvService} from '../services/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  idPatient: number=1;
  erreur1: any='';
  erreur2: any='';
  //var img=new HTMLImageElement();
  patientACreer: Patient =new Patient(0, '','','','','','');
  dates: Date[]=[];

  constructor(private rdvService: RdvService){}
  //constructor() { }

  ngOnInit(): void {
  }

  prendreRDV(): void{
    this.rdvService.prendreRDVPatient(this.patientACreer).subscribe(res=>{
      this.erreur1='no';
    }, error=>{
      this.erreur1=error;
    })
  }
  prendreRDVById(): void{
    this.rdvService.prendreRDVPatientById(this.idPatient).subscribe(res=>{
      this.erreur2='no';
    }, error=>{
      this.erreur2=error;
    })
  }
  afficherDate(): void{
    this.rdvService.getRDVByIdPatient(this.idPatient).subscribe(res=>{
      this.dates=res;
    })
  }
}
