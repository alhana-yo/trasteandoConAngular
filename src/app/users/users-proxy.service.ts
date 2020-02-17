import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './users-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UsersProxyService {
  // Este serviciorecupera los datos, por eso necesitamos el servicio httpCLeint
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserDTO[]> {
    return this.httpClient.get<UserDTO[]>('http://localhost:3001/api/public/users');
  }

}
