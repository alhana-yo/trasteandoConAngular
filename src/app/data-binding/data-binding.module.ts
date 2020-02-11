import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildComponent } from "./child/child.component";
import { FatherComponent } from "./father/father.component";

const ROUTES: Routes = [{ path: "", component: FatherComponent }];
@NgModule({
  declarations: [FatherComponent, ChildComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [FatherComponent, ChildComponent]
})
export class DataBindingModule {}
