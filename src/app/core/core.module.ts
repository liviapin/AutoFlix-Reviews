import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdicionarFilmesComponent } from './paginas/adicionar-filmes/adicionar-filmes.component';
import { FilmeDetalhesComponent } from './paginas/filme-detalhes/filme-detalhes.component';
import { HomeComponent } from './paginas/home/home.component';
import { ArrayFiltroPipe } from './pipes/array-filtro.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    AdicionarFilmesComponent,
    FilmeDetalhesComponent,
    ArrayFiltroPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [HomeComponent, ArrayFiltroPipe],
})
export class CoreModule {}
