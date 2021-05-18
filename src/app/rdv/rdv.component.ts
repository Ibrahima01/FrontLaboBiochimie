import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../models/commentaire';
import { Patient } from '../models/patient';
import { Personne } from '../models/personne';
import { User } from '../models/user';
import { CommentaireService } from '../services/commentaire.service';
import {RdvService} from '../services/rdv.service';
import { getPersonneFromLocalStorage } from '../utils/personne.utils';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {

  idPatient: number=1;
  idAdmin: number=1;
  erreur1: any='';
  erreur2: any='';
  erreurCommentaire: any='';
  //var img=new HTMLImageElement();
  user: User=new User(0,"",'','PATIENT');
  patientACreer: Patient =new Patient(0, '','',0,'',false, false,'','',this.user);
  dates: Date=new Date("1990-11-25 14:35:00");
  public personne: Personne = {
    user: this.user,
    prenom: "",
    nom: "",
  };
  reponse: Array<string>=new Array();
  commentaire: Commentaire= new Commentaire(0, "", this.reponse);
  constructor(private rdvService: RdvService, private commentaireService: CommentaireService){}
  //constructor() { }

  ngOnInit(): void {
    this.personne = getPersonneFromLocalStorage();
    console.log(this.personne)
  }

  prendreRDV(): void{
    this.rdvService.prendreRDVPatient(this.patientACreer).subscribe(res=>{
      this.erreur1='no';
    }, error=>{
      this.erreur1=error;
    })
  }
  //idPatient=this.personne.user.id;
  prendreRDVById(): void{
    this.rdvService.prendreRDVPatientById(this.personne.user.id).subscribe(res=>{
      this.erreur2='no';
    }, error=>{
      this.erreur2=error;
    })
    this.rdvService.getRDVByIdPatient(this.idPatient).subscribe(res=>{
      this.dates=res;
    })
  }
  prendreRDVByIdAdmin():void{
    this.rdvService.prendreRDVAdminById(this.idPatient).subscribe(res=>{
      this.erreur2='no';
    }, error=>{
      this.erreur2=error;
    })
    this.rdvService.getRDVByIdPatient(this.idPatient).subscribe(res=>{
      this.dates=res;
    })
  }
  afficherDate(): void{
    this.rdvService.getRDVByIdPatient(this.idPatient).subscribe(res=>{
      this.dates=res;
    })
  }

  commenter(): void{
    this.commentaireService.createCommentaire(this.commentaire).subscribe(res=>{
      this.erreurCommentaire='no';
    }, error=>{
      this.erreurCommentaire=error;
    })
  }
}
