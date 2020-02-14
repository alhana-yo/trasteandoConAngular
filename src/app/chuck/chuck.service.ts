import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient, @Inject('config') private config: any) { }

  getInfo(): Observable<string> {
    return this.http.get<string>(this.config.api);
  }
}
