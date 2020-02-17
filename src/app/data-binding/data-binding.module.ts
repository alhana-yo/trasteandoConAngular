import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfirmService } from "../auth/confirm-service.service";
import { ChildComponent } from "./child/child.component";
import { FatherComponent } from "./father/father.component";

// partimos de cero, porque vamos a cargar este módulo lazy
const ROUTES: Routes = [
  { path: "", component: FatherComponent },

  // ojo! hay que añadirlo también en la ruta del componente
  { path: ":curso", component: ChildComponent, canDeactivate: [ConfirmService] }
];
@NgModule({
  declarations: [FatherComponent, ChildComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [FatherComponent, ChildComponent]
})
export class DataBindingModule {}
