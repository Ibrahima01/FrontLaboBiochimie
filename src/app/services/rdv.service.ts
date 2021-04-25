import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL } from "../config/constant";
import { Patient } from "../models/patient";
import {RDV} from "../models/rdv"
@Injectable()
export class RdvService {
    constructor (private http: HttpClient){}

    prendreRDVPatient(patient: Patient):Observable<Patient>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.post<Patient>(`${BASE_URL}/RDV/patientPrendRDV`, patient, {headers});
    }
    getRDVByIdPatient(id: number):Observable<Date[]>{
        return this.http.get<Date[]>(`${BASE_URL}/RDV/findRDVByIdPatient/${id}`);
    }
    prendreRDVPatientById(id :number):Observable<RDV>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.post<RDV>(`${BASE_URL}/RDV/patientPrendRDVById/${id}`, {headers});
    }
}