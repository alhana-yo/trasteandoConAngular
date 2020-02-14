import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckComponent } from './chuck/chuck.component';

// ESto es un modulo secundario. Como es carga lazy, tiene que tener el path ' '
const ROUTES: Routes = [{ path: '', component: ChuckComponent }];

const config = { api: 'http://localhost:3001/api/random-quote' };
@NgModule({
  declarations: [ChuckComponent],
  imports: [
    CommonModule, RouterModule.forChild(ROUTES), HttpClientModule
  ],
  // exports: [ChuckComponent], cuando se carga de forma lazy, no hace falta exportar el componente
})
export class ChuckModule { }
