import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BASE_URL, TOKEN_KEY } from "../config/constant";
import { Patient } from "../models/patient";

@Injectable()
export class ListePatientService {
  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
    });
    return this.http.get<Patient[]>(`${BASE_URL}/Patient/GetAllPatients`, {
      headers,
    });
  }
}
