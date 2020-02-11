import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PipesModule } from "../pipes/pipes.module";
import { ExampleDirectivasComponent } from "./example-directivas/example-directivas.component";

const ROUTES: Routes = [
  { path: "directivas", component: ExampleDirectivasComponent }
];

// Aquí sólo puedo importar módulos. Importo los módulos que tienen cosas que quiero usar dentro de mis templates
@NgModule({
  declarations: [ExampleDirectivasComponent],
  imports: [CommonModule, PipesModule, RouterModule.forChild(ROUTES)],
  exports: [ExampleDirectivasComponent]
  // providers: [MyService]
})
export class DirectivasModule {}
