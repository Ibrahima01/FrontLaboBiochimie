import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE } from '../models/role.enum';
import { LoginService } from './login.service';

@Injectable()
export class PatientGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise<boolean>((resolve) => {
      this.loginService.user().subscribe(
        (res) => {
          if (res.role === ROLE.ADMIN) {
            resolve(true);
          } else {
            this.router.navigate(['login']);
            resolve(false);
          }
        },
        (error: any) => {
          this.router.navigate(['login']);
          resolve(false);
        }
      );
    });
  }
}
