import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthService } from "./auth/auth.service";
// ya no hace falta importar estos módulos porque los cargamos mediante el lazy loading
// con esto conseguimos reducir el tamaño del bundle principal. Porque de esta manera, los módulos cargados lazy, no están cargados desde el principio
// import { DataBindingModule } from "./data-binding/data-binding.module";
// import { DirectivasModule } from "./directivas/directivas.module";

const config = {
  api: "http://back"
};

// const ROUTES: Routes = [
//   { path: "", redirectTo: "directivas", pathMatch: "full" },
//   {
//     path: "directivas",
//     loadChildren: "./directivas/directivas.module#DirectivasModule"
//   },
//   {
//     path: "data-binding",
//     loadChildren: "./data-binding/data-binding.module#DataBindingModule"
//   },
//   { path: "**", redirectTo: "directivas" }
// ];
// En angular 9

const ROUTES: Routes = [
  { path: "", redirectTo: "directivas", pathMatch: "full" },
  {
    path: "directivas",
    loadChildren: () =>
      import("./directivas/directivas.module").then(m => m.DirectivasModule)
  },
  {
    path: "data-binding",
    canActivate: [AuthService],
    loadChildren: () =>
      import("./data-binding/data-binding.module").then(
        m => m.DataBindingModule
      )
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
