import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { Personnel } from "../models/personnel";

@Injectable()
export class PersonnelService{ headers: HttpHeaders;
    constructor (private http: HttpClient){
         this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
        });
    }

    creerPersonnel (personnel: Personnel):Observable<Personnel>{
        return this.http.post<Personnel>(`${BASE_URL}/personnel/newPersonnel`, personnel, {headers:this.headers});
    }
}