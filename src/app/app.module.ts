import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DataBindingModule } from "./data-binding/data-binding.module";
import { DirectivasModule } from "./directivas/directivas.module";

const config = {
  api: "http://back"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DirectivasModule, DataBindingModule],
  providers: [{ provide: "config", useValue: config }],

  bootstrap: [AppComponent]
})
export class AppModule {}
