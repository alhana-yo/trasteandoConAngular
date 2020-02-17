import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth/auth-interceptor-service.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SimpleComponent } from './layouts/simple/simple.component';
// ya no hace falta importar estos módulos porque los cargamos mediante el lazy loading
// con esto conseguimos reducir el tamaño del bundle principal. Porque de esta manera, los módulos cargados lazy, no están cargados desde el principio
// import { DataBindingModule } from "./data-binding/data-binding.module";
// import { DirectivasModule } from "./directivas/directivas.module";

const config = {
  api: 'http://localhost:3001/api/random-quote'
};

const ROUTES: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'directivas',
        loadChildren: () =>
          import('./directivas/directivas.module').then(m => m.DirectivasModule)
      },
      {
        path: 'data-binding',
        canActivate: [AuthService],
        loadChildren: () =>
          import('./data-binding/data-binding.module').then(
            m => m.DataBindingModule
          )
      },
      // Declaramos una nueva línea
      {
        path: 'chuck',
        loadChildren: () =>
          import('./chuck/chuck.module').then(m => m.ChuckModule)
      }
    ]
  },
  {
    path: 'login',
    component: SimpleComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  { path: '**', redirectTo: 'directivas' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), LayoutsModule, AuthModule, HttpClientModule],
  providers: [{ provide: 'config', useValue: config }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
