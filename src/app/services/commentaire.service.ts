import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../config/constant";
import { Commentaire } from "../models/commentaire";

@Injectable()
export class CommentaireService{
    constructor(private http: HttpClient){}
    createCommentaire(commentaire: Commentaire):Observable<Commentaire>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.post<Commentaire>(`${BASE_URL}/commentaire/createCommenteaire`, commentaire, {headers});
    }
    getCommentaire():Observable<Commentaire[]>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.get<Commentaire[]>(`${BASE_URL}/commentaire/getCommentaires`, {headers});
    }
    getReponse(id :number): Observable<string>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.get<string>(`${BASE_URL}/commentaire/getReponseById/${id}`, {headers});
    }
    repondreCommentaire(id: number, reponse: string):Observable<string>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.put<string>(`${BASE_URL}/commentaire/getReponseById/${id}`, reponse, {headers});
    }
}