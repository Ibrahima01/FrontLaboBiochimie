import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN_KEY } from '../config/constant';
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
  login(): void {
    this.loginService.login(this.credentials).subscribe((res) => {
      localStorage.setItem(TOKEN_KEY, res);
      if (res && res.length > 0) {
        this.router.navigate(['patient']);
      }
    });
  }
}
