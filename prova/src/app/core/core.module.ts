import { RouterModule } from '@angular/router';
import { FilmeDetalhesComponent } from './paginas/filme-detalhes/filme-detalhes.component';
import { AdicionarFilmesComponent } from './paginas/adicionar-filmes/adicionar-filmes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeComponent } from './paginas/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    AdicionarFilmesComponent,
    FilmeDetalhesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [HomeComponent],
})
export class CoreModule {}
