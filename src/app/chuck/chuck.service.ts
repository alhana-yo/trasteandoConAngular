import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  // inyectamos el servicio http

  // constructor(private http: HttpClient, @Inject('config') private config: any) { }
  constructor(private http: HttpClient) { }

  getInfo(): Observable<string> {
    // return this.http.get<string>(this.config.api);
    return this.http.get('http://localhost:3001/api/random-quote', { responseType: 'text' });
  }
}
