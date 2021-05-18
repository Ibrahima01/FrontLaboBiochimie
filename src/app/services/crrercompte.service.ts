import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../config/constant";
import { Patient } from "../models/patient";

@Injectable()
export class CreerCompteService{
    constructor(private http: HttpClient) {}

    creerPatient(patient: Patient): Observable<Patient> {
        const headers: HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.post<Patient>(`${BASE_URL}/Patient/newPatient`, patient, {
          headers,
        });
    }
    
}