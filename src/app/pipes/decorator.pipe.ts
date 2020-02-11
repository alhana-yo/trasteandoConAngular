import { Pipe, PipeTransform } from "@angular/core";

// Poner en mayúsculas y aplicar el decorador a los nombres de ayer

@Pipe({
  name: "decorator"
})
export class DecoratorPipe implements PipeTransform {
  transform(value: string, dec: string): string {
    return dec + value + dec;
  }
}
