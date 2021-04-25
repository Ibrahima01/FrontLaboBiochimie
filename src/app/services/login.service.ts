import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BASE_URL, TOKEN_KEY } from '../config/constant';
import { Credentials } from '../models/credentials';
import { User } from '../models/user';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}
  login(credentials: Credentials): Observable<string> {
    return this.http
      .post<void>(`${BASE_URL}/login`, credentials, { observe: 'response' })
      .pipe(
        map((res: any) => {
          return res.headers.get('Authorization');
        })
      );
  }
  user(): Observable<User> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY) || ''}`,
    });
    return this.http.get<User>(`${BASE_URL}/user`, { headers });
  }
}
