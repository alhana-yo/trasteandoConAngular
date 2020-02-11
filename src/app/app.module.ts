import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DataBindingModule } from "./data-binding/data-binding.module";
import { DirectivasModule } from "./directivas/directivas.module";

const config = {
  api: "http://back"
};

const ROUTES: Routes = [
  { path: "", redirectTo: "directivas", pathMatch: "full" },

  { path: "**", redirectTo: "directivas" }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DirectivasModule,
    DataBindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{ provide: "config", useValue: config }],

  bootstrap: [AppComponent]
})
export class AppModule {}
