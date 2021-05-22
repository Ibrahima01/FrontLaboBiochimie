import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { Commentaire } from "../models/commentaire";
import { Patient } from "../models/patient";

@Injectable()
export class CommentaireService{
    headers: HttpHeaders;
  constructor (private http: HttpClient){
       this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
      });
  }
    createCommentaire(commentaire: Commentaire):Observable<Commentaire>{
        return this.http.post<Commentaire>(`${BASE_URL}/commentaire/createCommenteaire`, commentaire, {headers: this.headers});
    }
    getCommentaire():Observable<Commentaire[]>{
        return this.http.get<Commentaire[]>(`${BASE_URL}/commentaire/getCommentaires`, {headers:this.headers});
    }
    getReponse(id :number): Observable<string>{
        return this.http.get<string>(`${BASE_URL}/commentaire/getReponseById/${id}`, {headers:this.headers});
    }
    getInfoPatient(id: number):Observable<Patient>{
        return this.http.get<Patient>(`${BASE_URL}/commentaire/getInfoPatient/${id}`, {headers:this.headers});
    }
    repondreCommentaire(id: number, reponse: string):Observable<string>{
        return this.http.put<string>(`${BASE_URL}/commentaire/getReponseById/${id}`, reponse, {headers:this.headers});
    }
}