import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChildComponent } from "./child/child.component";
import { FatherComponent } from "./father/father.component";

@NgModule({
  declarations: [FatherComponent, ChildComponent],
  imports: [CommonModule],
  exports: [FatherComponent, ChildComponent]
})
export class DataBindingModule {}
