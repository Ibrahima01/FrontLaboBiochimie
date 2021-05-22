import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { Patient } from "../models/patient";
import {RDV} from "../models/rdv"
@Injectable()
export class RdvService {
    headers: HttpHeaders;
    constructor (private http: HttpClient){
         this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
        });
    }

    prendreRDVPatient(patient: Patient):Observable<Patient>{
        
        return this.http.post<Patient>(`${BASE_URL}/RDV/patientPrendRDV`, patient, { headers: this.headers });
    }
    getRDVByIdPatient(id: number):Observable<Date> {
        return this.http.get<Date>(`${BASE_URL}/RDV/findRDVByIdPatient/${id}`, { headers: this.headers });
    }
    prendreRDVPatientById(id :number):Observable<RDV>{
        return this.http.post<RDV>(`${BASE_URL}/RDV/patientPrendRDVById/${id}`, {}, { headers: this.headers });
    }
    prendreRDVAdminById(id: number):Observable<RDV>{
        return this.http.post<RDV>(`${BASE_URL}/RDV/adminPrendRDVById/${id}`,{}, { headers: this.headers });
    }
    getPatient(username: string): Observable<Patient> {
        return this.http.get<Patient>(`${BASE_URL}/user/findPatientByUsername/${username}`, { headers: this.headers });
      }
    deleteRDV(idRDV: number):Observable<RDV>{
        return this.http.post<RDV>(`${BASE_URL}/RDV/deleteRDV/${idRDV}`,{}, { headers: this.headers });
    }
    findRDVByPatient(idPatient: number):Observable<RDV>{
        return this.http.get<RDV>(`${BASE_URL}/RDV/findRDVByPatient/${idPatient}`, {headers:this.headers});
    }
}