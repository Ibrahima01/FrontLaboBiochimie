import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../config/constant";
import { Personnel } from "../models/personnel";

@Injectable()
export class PersonnelService{
    constructor(private http: HttpClient){};

    creerPersonnel (personnel: Personnel):Observable<Personnel>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.post<Personnel>(`${BASE_URL}/personnel/newPersonnel`, personnel, {headers});
    }
}