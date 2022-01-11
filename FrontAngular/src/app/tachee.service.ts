import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Tachee } from './tachee';

@Injectable({
  providedIn: 'root'
})
export class TacheeService {

  private baseURL = "http://localhost:8080/api/v2/tachees";

  constructor(private httpClient: HttpClient) { }
  
  getTacheesList(): Observable<Tachee[]>{
    return this.httpClient.get<Tachee[]>(`${this.baseURL}`);
  }

  createTachee(tachee: Tachee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, tachee);
  }

  getTacheeById(id: number): Observable<Tachee>{
    return this.httpClient.get<Tachee>(`${this.baseURL}/${id}`);
  }

  updateTachee(id: number, tachee: Tachee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, tachee);
  }

  deleteTachee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
