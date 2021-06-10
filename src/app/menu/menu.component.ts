import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ROLE } from '../models/role.enum';
import { ADMIN_MENU, Menu, PATIENT_MENU } from '../data/menu';
import { Personne } from '../models/personne';
import { getPersonneFromLocalStorage } from '../utils/personne.utils';
declare var $:any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  
  public personne: Personne = getPersonneFromLocalStorage();
   menus: Menu[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.personne && this.personne.user){
    if(this.personne.user.role === ROLE.ADMIN) {
      this.menus = ADMIN_MENU;
    } else {
      this.menus = PATIENT_MENU;
    } 
  }
  }
  ngAfterViewInit(){
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $('#sidebarCollapse').toggleClass('active');
      });
  });
  }
}
