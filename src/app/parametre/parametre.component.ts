import { Component, OnInit } from '@angular/core';
import { Parametre } from '../models/parametre';
import { ParametreService } from '../services/parametre.service';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  constructor(private parametreService: ParametreService) { }

  parametre1:Parametre=new Parametre(0,0,0,0,0,0,0,0,0);
  parametre2:Parametre=new Parametre(0,0,0,0,0,0,0,0,0);
  erreur1: string='';
  edit: boolean = false;

  ngOnInit(): void {
    this.getParametre();
  }

  update():void {
    this.parametreService.updateParametre(this.parametre2).subscribe(res=>{
      this.erreur1='no';
    }, error=>{
      this.erreur1=error;
    })
  }

  toggleInput(): void{
    this.edit = !this.edit;
  }
  getParametre(): void{
    this.parametreService.getParametre().subscribe(res=>{
      this.parametre2=res
    });
    console.log(this.parametre2);
  }
}
