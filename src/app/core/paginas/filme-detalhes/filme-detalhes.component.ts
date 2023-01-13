import { FilmeResponse } from 'src/app/shared/models/response/filme.response';
import { Subscription } from 'rxjs';
import { FilmesService } from 'src/app/shared/services/filmes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import 'bootstrap/dist/css/bootstrap.css';

@Component({
  selector: 'app-tela-filme',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css'],
})
export class FilmeDetalhesComponent implements OnInit {
  protected filmes: FilmeResponse[] = [];

  constructor(
    private filmesService: FilmesService,
    private rota: ActivatedRoute
  ) {

  }

  @Input() filme: any;

  ngOnInit(): void {
    this.filmesService
      .buscar(this.rota.snapshot.params['id'])
      .subscribe({
        next: (resposta) => {
          this.filme = resposta;
          this.filmesService.listarRecomendandos(this.filme.genero).subscribe((response) => {
            this.filmes = response;
          });
        },
      });
  }
}
