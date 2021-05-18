import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { Parametre } from "../models/parametre";

@Injectable()
export class ParametreService{
  headers: HttpHeaders;
  constructor (private http: HttpClient){
       this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
      });
  }
    updateParametre(parametre: Parametre):Observable<Parametre>{
          return this.http.post<Parametre>(`${BASE_URL}/parametre/update`, parametre, {headers:this.headers});
    }
    getParametre ():Observable<Parametre>{
          return this.http.get<Parametre>(`${BASE_URL}/parametre/getParametre`, {headers:this.headers});
    }
}