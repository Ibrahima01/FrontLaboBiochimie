import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, TOKEN_KEY } from '../config/constant';
import { Patient } from '../models/patient';

@Injectable()
export class PatientService {
  headers: HttpHeaders;
    constructor (private http: HttpClient){
         this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
        });
    }

  getPatients(): Observable<Patient[]> {
    
    return this.http.get<Patient[]>(`${BASE_URL}/Patient/GetAllPatients`, {
      headers: this.headers
    });
  }

  creerPatient(patient: Patient): Observable<Patient> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Patient>(`${BASE_URL}/Patient/newPatient`, patient, {
      headers: this.headers
    });
  }
  /*
    prendreRDVPatient(patient: Patient):Observable<Patient>{
        const headers: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:4200',
        });
        return this.http.post<Patient>(`http://localhost:9080/RDV/patientPrendRDV`, patient, {headers});
    }
    */
  getPatientByid(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${BASE_URL}/Patient/findPatientById/${id}`);
    //BASE_URL+'/Universite/findUniversite/'+id;
  }
  deletePatient(id: number): Observable<Patient> {
    
    return this.http.post<Patient>(`${BASE_URL}/Patient/deletePatient/${id}`, {}, {headers: this.headers});
  } /*
    authentification(email: string, password: string):Observable<boolean>{
        let parameters=new HttpParams().set(email, password);
        return this.http.get<boolean>(`${BASE_URL}/Patient//authentification/${email, password}`, {params: parameters});
    }
    */
}
