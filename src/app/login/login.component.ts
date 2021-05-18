import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PERSONNE_KEY, TOKEN_KEY } from '../config/constant';
import { Credentials } from '../models/credentials';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials: Credentials = new Credentials('', '');
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  getPersonneInfo(): void {
    this.loginService.personne().subscribe(res => {
      if(res) {
        localStorage.setItem(PERSONNE_KEY, JSON.stringify(res));
          this.router.navigate(['rdv']);
    }
    })
  }
  login(): void {
    this.loginService.login(this.credentials).subscribe((res) => {
      localStorage.setItem(TOKEN_KEY, res);  
        this.getPersonneInfo();
    });
  }
}
