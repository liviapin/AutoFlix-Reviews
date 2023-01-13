import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
import { FilmeResponse } from 'src/app/shared/models/response/filme.response';
import { FilmesService } from 'src/app/shared/services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  filtro: string = '';
  private filmesSubscription: Subscription;
  protected filmes: FilmeResponse[] = [];
  filtroFilmes: Array<{
    titulo: string;
    genero: string;
    classificacaoIndicativa: string;
  }> = [];

  @ViewChild('campoBusca') campoBusca?: ElementRef<HTMLInputElement>;

  constructor(private readonly filmeService: FilmesService) {
    this.filmesSubscription = filmeService.listar().subscribe({
      next: (resposta) => {
        this.filmes = resposta;
      },
    });
  }

  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.filtroFilmes = this.filtroFilmes.filter(
        (a) => a.titulo.toUpperCase().indexOf(palavraChave) >= 0
      );
    }
  }

  ngOnInit(): void {
    this.filmeService
      .listarFiltro()
      .subscribe((retornoApi) => (this.filtroFilmes = retornoApi));
  }

  ngAfterViewInit() {
    if (this.campoBusca !== undefined) {
      fromEvent(this.campoBusca.nativeElement, 'keyup')
        .pipe(debounceTime(1000))
        .subscribe((e: Event) => {
          const target = e.target as HTMLInputElement;
          this.filtro = target.value;
        });
    }
  }
}


