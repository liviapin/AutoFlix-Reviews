import { FilmeResponse } from 'src/app/shared/models/response/filme.response';

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmesService } from 'src/app/shared/services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private filmesSubscription: Subscription
  protected filmes: FilmeResponse[] = []

  constructor(private readonly filmeService: FilmesService) {
    this.filmesSubscription = filmeService.listar().subscribe({
      next: (resposta) => {
        this.filmes = resposta
      }
    })
   }

  ngOnInit(): void {
  }

}
