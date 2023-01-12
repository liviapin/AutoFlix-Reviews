import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmeInserirRequest } from 'src/app/shared/models/request/filme-inserir.request';
import { FilmeResponse } from 'src/app/shared/models/response/filme.response';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  baseUrl = environment.apiBaseUrl + '/filmes';

  constructor(private readonly httpService: HttpClient) {}

  listar(): Observable<FilmeResponse[]> {
    return this.httpService.get<FilmeResponse[]>(this.baseUrl);
  }

  adicionar(request: FilmeInserirRequest): Observable<FilmeResponse> {
    return this.httpService.post<FilmeResponse>(this.baseUrl, request);
  }

  buscar(id: number): Observable<FilmeResponse> {
    return this.httpService.get<FilmeResponse>(this.baseUrl + `/${id}`);
  }

  listarRecomendandos(genero: string){
    let params = {genero: genero, _limit: 6}
    return this.httpService.get<FilmeResponse[]>(this.baseUrl, {params: params as any});
  }

}
