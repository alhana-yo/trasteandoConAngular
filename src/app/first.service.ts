import { Injectable } from "@angular/core";
import { SecondService } from "./second.service";

// Los servicios se usan para sacar lógica de los componentes, y que se pueda
// reutilizar desde cualquier otro componente de la app
@Injectable({
  providedIn: "root"
})
export class FirstService {
  constructor(private secondService: SecondService) {}

  // getMessage(): string {
  //   return "Hola hijo! desde el servicio";
  // }
  // usamos el segundo servicio dentro del primero
  getMessage(): string {
    return "Hola hijo! desde el servicio" + this.secondService.getMessage();
  }
}
