import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ROLE } from './models/role.enum';
import { ADMIN_MENU, Menu, PATIENT_MENU } from './data/menu';
import { Personne } from './models/personne';
import { getPersonneFromLocalStorage } from './utils/personne.utils';
import { NavigationStart, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaboBiochimie';
  currentRoute: string = "";
  public personne: Personne = getPersonneFromLocalStorage();
  menus: Menu[] = [];
 constructor(private router: Router) {
   router.events.subscribe(event => {
     if(event instanceof NavigationStart){
       this.currentRoute = event.url;
       console.log("router event",event.url)
     }
   })
  }

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
 logout(){
   localStorage.clear();
   this.router.navigate(['login'])
 }

}
