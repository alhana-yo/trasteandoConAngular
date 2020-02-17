import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FAKE_USERS } from './users-fake.spec';
import { UsersProxyService } from './users-proxy.service';
import { User } from './users.model';
import { UsersService } from './users.service';


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should adapt userDTO to user', () => {
    // tslint:disable-next-line: no-unused-expression
    // tslint:disable-next-line: one-variable-per-declaration
    const spyService = spyOn(TestBed.get(UsersProxyService), 'getUsers').and.callFake(() => of(FAKE_USERS)
    );
    const service: UsersService = TestBed.inject(UsersService);
    service.getUsers().subscribe((users: User[]) => {
      expect(users[0].city).toEqual(FAKE_USERS[0].address.city);
      expect(users[0].email).toEqual(FAKE_USERS[0].email);
      expect(users[0].name).toEqual(FAKE_USERS[0].name);
      expect(users[0].phone).toEqual(FAKE_USERS[0].phone);
      expect(users[0].username).toEqual(FAKE_USERS[0].username);
    });
    // para comprobar que se ha al menos llamado una vez, sin tener levantado el back
    expect(spyService).toHaveBeenCalled();
  });
});
