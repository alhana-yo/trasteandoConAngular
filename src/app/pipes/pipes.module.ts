import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DecoratorPipe } from "./decorator.pipe";

// exporto el componente que quiero que se use fuera. Dentro de mi cajita pipes, exporto lo que quiero usar
@NgModule({
  declarations: [DecoratorPipe],
  imports: [CommonModule],
  exports: [DecoratorPipe]
})
export class PipesModule {}
