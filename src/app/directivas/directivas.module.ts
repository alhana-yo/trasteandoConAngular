import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PipesModule } from "../pipes/pipes.module";
import { ExampleDirectivasComponent } from "./example-directivas/example-directivas.component";

// Aquí sólo puedo importar módulos. Importo los módulos que tienen cosas que quiero usar dentro de mis templates
@NgModule({
  declarations: [ExampleDirectivasComponent],
  imports: [CommonModule, PipesModule],
  exports: [ExampleDirectivasComponent]
  // providers: [MyService]
})
export class DirectivasModule {}
