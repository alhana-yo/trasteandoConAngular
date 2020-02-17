import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { UserDTO } from './users-dto.model';
import { UsersProxyService } from './users-proxy.service';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private proxy: UsersProxyService) { }
  getUsers(): Observable<User[]> {
    // Los datos que estan llegando pasalos por este pipe, que yo voy a adaptar esos datos a los que necesite
    return this.proxy.getUsers().pipe(
      // El map es de la programación reactiva, y es como el map de JS pero trabaja con observables
      // le esta llegando el array de usersDTO y lo vamos a trasformar a un array de users
      map((usersDTO: UserDTO[]) => {
        const users: User[] = [];
        return usersDTO.map((usersDTO: UserDTO) => {
          const user: User = {
            city: usersDTO.address.city,
            email: usersDTO.email,
            name: usersDTO.name,
            phone: usersDTO.phone,
            username: usersDTO.username
          };
          // Ojo, meter el objeto en el array con un spread. NUNCA usar push, porque al hacer push estamos haciendo algo mutable
          // users = [...users, user];
          // o hacer el return del map, porque el map ya te devuelve un array diferente al UsersDTO
          return user;

        });

      })
    );
  }

}
