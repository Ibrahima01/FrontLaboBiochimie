import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { RDV } from "../models/rdv";

@Injectable()
export class HistoriqueService{
    headers: HttpHeaders;
    constructor (private http: HttpClient){
         this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
        });
    }
    getHistoriqueRDVPatient(idPatient:number):Observable<RDV[]>{
        return this.http.get<RDV[]>(`${BASE_URL}/RDV/historique/${idPatient}`, {headers:this.headers});
    }
}