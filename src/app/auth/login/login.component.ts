import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidator } from 'src/app/common-validator';
import { LoginService } from '../login.service';
import { TokenDTO } from '../tokenDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      // username: new FormControl('valor por defecto'),
      username: new FormControl('', [Validators.required, CommonValidator.startWithNumber], [CommonValidator.userTaken]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }


  onSave() {
    console.log(this.form.value);
    // Aqui recuperamos cada campo username y password, que es lo que necesito para llamar al servicio
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    this.loginService.login(username, password).subscribe(
      // guardamos el token en el session storage
      (token: TokenDTO) => sessionStorage.setItem('token', token.access_token)
    );

  }

}
