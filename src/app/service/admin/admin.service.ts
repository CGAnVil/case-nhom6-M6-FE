import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

export const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/admins`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/admins/${id}`);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${API_URL}/admins/${id}`);
  }
}
