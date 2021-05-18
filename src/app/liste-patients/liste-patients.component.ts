import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Patient } from '../models/patient';
import { ListePatientService} from '../services/liste-patient.service'

@Component({
  selector: 'app-liste-patients',
  templateUrl: './liste-patients.component.html',
  styleUrls: ['./liste-patients.component.css']
})
export class ListePatientsComponent implements OnInit {

  constructor(private patientService: ListePatientService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatients();
  }
  patients: Patient[]=[];
  getPatients(): void{
    this.patientService.getPatients().subscribe(res=>{
      this.patients=res
    });
    console.log(this.patients);
  }


}
