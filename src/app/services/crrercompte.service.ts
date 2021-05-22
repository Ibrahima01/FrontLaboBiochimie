import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { Patient } from "../models/patient";

@Injectable()
export class CreerCompteService{
  headers: HttpHeaders;
  constructor (private http: HttpClient){
       this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
      });
  }

    creerPatient(patient: Patient): Observable<Patient> {
        return this.http.post<Patient>(`${BASE_URL}/Patient/newPatient`, patient, {headers:this.headers});
    }
    
}