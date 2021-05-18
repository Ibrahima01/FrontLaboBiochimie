import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../models/commentaire';
import { CommentaireService } from '../services/commentaire.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {

  constructor(private commentaireService: CommentaireService) { }

  commentaires: Commentaire[]=[];

  ngOnInit(): void {
    this.getCommentaires();
  }

  getCommentaires(): void{
    this.commentaireService.getCommentaire().subscribe(res=>{
      this.commentaires=res
    });
    console.log(this.commentaires);
  }

}
