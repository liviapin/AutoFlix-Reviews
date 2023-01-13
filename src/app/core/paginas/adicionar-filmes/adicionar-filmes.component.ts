import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmeInserirRequest } from 'src/app/shared/models/request/filme-inserir.request';
import { FilmesService } from '../../../shared/services/filmes.service';

@Component({
  selector: 'app-adicionar-filmes',
  templateUrl: './adicionar-filmes.component.html',
  styleUrls: ['./adicionar-filmes.component.css']
})
export class AdicionarFilmesComponent implements OnInit {
  filmeForm!: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private filmesService: FilmesService
  ) { }

  ngOnInit(): void {
    this.filmeForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      sinopse: ['', [Validators.required, Validators.maxLength(500)]],
      avaliacaoDaCritica: [0, [Validators.required]],
      genero: ['', [Validators.required]],
      duracaoEmSegundo: [0, [Validators.required]],
      classificacaoIndicativa: ['', [Validators.required]],
      dataDeLancamento: ['', [Validators.required]],
      linkCapa: ['', [Validators.required]],
    })
  }


  botaoEnviar() {
    let formulario = this.filmeForm.getRawValue();


    let filme = new FilmeInserirRequest();

    filme.titulo = formulario.titulo;
    filme.sinopse = formulario.sinopse;
    filme.avaliacaoDaCritica = formulario.avaliacaoDaCritica;
    filme.genero = formulario.genero;
    filme.duracaoEmSegundo = formulario.duracaoEmSegundo;
    filme.classificacaoIndicativa = formulario.classificacaoIndicativa;
    filme.dataDeLancamento = formulario.dataDeLancamento;
    filme.linkCapa = formulario.linkCapa;


    this.filmesService.adicionar(filme).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (erro: HttpErrorResponse) => {
        console.log(erro);
      }
    });
  }

}
