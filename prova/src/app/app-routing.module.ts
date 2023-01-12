import { FilmeDetalhesComponent } from './core/paginas/filme-detalhes/filme-detalhes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarFilmesComponent } from './core/paginas/adicionar-filmes/adicionar-filmes.component';
import { HomeComponent } from './core/paginas/home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
  },

  {
    path: 'adicionar-filme',
    pathMatch: 'full',
    component: AdicionarFilmesComponent,
  },

  {
    path: 'filme/:id',
    component: FilmeDetalhesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
