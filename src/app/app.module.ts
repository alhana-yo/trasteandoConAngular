import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
// ya no hace falta importar estos módulos porque los cargamos mediante el lazy loading
// import { DataBindingModule } from "./data-binding/data-binding.module";
// import { DirectivasModule } from "./directivas/directivas.module";

const config = {
  api: "http://back"
};

const ROUTES: Routes = [
  { path: "", redirectTo: "directivas", pathMatch: "full" },
  {
    path: "directivas",
    loadChildren: "./directivas/directivas.module#DirectivasModule"
  },
  {
    path: "data-binding",
    loadChildren: "./data-binding/data-binding.module#DataBindingModule"
  },
  { path: "**", redirectTo: "directivas" }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [{ provide: "config", useValue: config }],

  bootstrap: [AppComponent]
})
export class AppModule {}
