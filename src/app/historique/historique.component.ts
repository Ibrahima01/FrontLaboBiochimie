import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import { RDV } from '../models/rdv';
import { User } from '../models/user';
import { HistoriqueService } from '../services/historique.service';
import { getPersonneFromLocalStorage } from '../utils/personne.utils';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor(private historiqueService: HistoriqueService) { }

  //rdv2: RDV  = new RDV();
  user: User=new User(0,"",'','PATIENT');
  public personne: Personne = {
    user: this.user,
    prenom: "",
    nom: "",
  };

  isLoading: boolean=false;

  ngOnInit(): void {
    this.personne = getPersonneFromLocalStorage();
    this.getHistorique();
  }
  rdv: RDV[]=[];
  idPatient: number=1;
  getHistorique():void{
    this.isLoading=true;
    this.idPatient=this.personne.user.id;
    this.historiqueService.getHistoriqueRDVPatient(this.idPatient).subscribe(
      res=>{this.rdv=res
      this.isLoading=false;
      }
    );
    console.log( this.rdv);
  }
  
}
