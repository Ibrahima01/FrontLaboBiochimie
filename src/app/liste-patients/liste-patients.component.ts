import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Patient } from '../models/patient';
import { User } from '../models/user';
import { ListePatientService} from '../services/liste-patient.service'
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {

  constructor(private listePatientService: ListePatientService, private route:ActivatedRoute, private patientService: PatientService) { }

  id : number=0;
  user: User=new User(0, "",'','PATIENT');
  patient: Patient =new Patient(0, '','',0,'',false, false,'','',this.user);


  ngOnInit(): void {
    this.getPatients();
  }
  patients: Patient[]=[];
  getPatients(): void{
    this.listePatientService.getPatients().subscribe(res=>{
      this.patients=res
    });
    console.log(this.patients);
  }

  delete(): void {    
    this.patientService.deletePatient(this.id!).subscribe(res=>{
      this.patient=res;
    });
  }
  

}
