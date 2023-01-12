import ClassificacaoIndicativa from "../classificacao-indicativa.enum"
export class FilmeResponse {

  public id!: number;
  public titulo!: string;
  public sinopse!: string;
  public avaliacaoDaCritica!: number;
  public genero!: string;
  public duracaoEmSegundo!: number;
  public classificacaoIndicativa?: ClassificacaoIndicativa;
  public dataDeLancamento!: string;
  public linkCapa!: string;


  constructor() {

  }
}

