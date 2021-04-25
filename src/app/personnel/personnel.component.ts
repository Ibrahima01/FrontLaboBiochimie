import { Component, OnInit } from '@angular/core';
import { Personnel } from '../models/personnel';
import { PersonnelService } from '../services/personnel.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  personnelACreer: Personnel=new Personnel(0,'','','','','');
  erreur1: any='';

  constructor(private personnelService: PersonnelService) { }

  ngOnInit(): void {
  }

  creer(): void {
    this.personnelService.creerPersonnel(this.personnelACreer).subscribe(res=>{
      this.erreur1='no';
    }, error=>{
      this.erreur1=error;
    })
  }

}
