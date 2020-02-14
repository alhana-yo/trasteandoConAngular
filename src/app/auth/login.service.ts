import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TokenDTO } from './tokenDTO';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;
  constructor(private http: HttpClient) { }

  // Creamos un método a la dirección de la API con el user y el password
  login(username: string, password: string): Observable<TokenDTO> {
    return this.http.post<TokenDTO>('http://localhost:3001/auth', { username, password });

  }


}



