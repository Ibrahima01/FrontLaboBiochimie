import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PERSONNE_KEY } from '../config/constant';
import { Personne } from '../models/personne';
import { getPersonneFromLocalStorage } from '../utils/personne.utils';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {

    const personne: Personne = getPersonneFromLocalStorage();
    if(personne && personne.user) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
