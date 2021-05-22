import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../models/commentaire';
import { Patient } from '../models/patient';
import { Personne } from '../models/personne';
import { User } from '../models/user';
import { CommentaireService } from '../services/commentaire.service';
import { getPersonneFromLocalStorage } from '../utils/personne.utils';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {

  constructor(private commentaireService: CommentaireService) { }

  id: number=0;
  user: User=new User(0,"",'','PATIENT');
  patient: Patient=new Patient(0, '','',0,'',false, false,'','',this.user);
  commentaires: Commentaire[]=[];
  public personne: Personne = {
    user: this.user,
    prenom: "",
    nom: "",
  };

  ngOnInit(): void {
    //this.getInfoPatient();
    this.getCommentaires();
  }
  getInfoPatient(): void{
    this.commentaireService.getInfoPatient(this.id).subscribe(res=>{this.patient=res});
  }
  getCommentaires(): void{
    this.commentaireService.getCommentaire().subscribe(res=>{ this.commentaires=res});
    console.log(this.commentaires);
  }

}
