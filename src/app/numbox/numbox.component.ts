import { Component, OnInit } from '@angular/core';
import { RDV } from '../models/rdv';
import { NumBoxService } from '../services/numbox.service';
import { RdvService } from '../services/rdv.service';

@Component({
  selector: 'app-numbox',
  templateUrl: './numbox.component.html',
  styleUrls: ['./numbox.component.css']
})
export class NumboxComponent implements OnInit {

  rdv: RDV  = new RDV();
  idPatient: number=1;
  numBox: number=1;
  erreur: string='';
  constructor(private rdvService: RdvService, private numBoxService: NumBoxService){}

  ngOnInit(): void {
  }

  updateNumBox(): void{
    this.numBoxService.updateNumBox(this.idPatient, this.numBox).subscribe(res=>{
      this.erreur='no';
      this.rdv=res;
    }, error=>{
      this.erreur=error;
    })
  }

}
