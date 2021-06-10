import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { RDV } from "../models/rdv";

@Injectable()
export class NumBoxService{
    headers: HttpHeaders;
    constructor (private http: HttpClient){
         this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
        });
    }
    updateNumBox(id: number, nombreBox:number):Observable<RDV>{
        return this.http.post<RDV>(`${BASE_URL}/RDV/updateNumBox/${id}/${nombreBox}`, {}, 
        { headers: this.headers })
    }
}