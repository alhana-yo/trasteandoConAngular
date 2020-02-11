import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DataBindingModule } from "./data-binding/data-binding.module";
import { DirectivasModule } from "./directivas/directivas.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DirectivasModule, DataBindingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
