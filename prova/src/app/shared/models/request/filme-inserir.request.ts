import ClassificacaoIndicativa from "../classificacao-indicativa.enum";

export class FilmeInserirRequest {

  public titulo!: string;
  public sinopse!: string;
  public avaliacaoDaCritica!: number;
  public genero!: string;
  public duracaoEmSegundo!: number;
  public classificacaoIndicativa?: ClassificacaoIndicativa;
  public dataDeLancamento!: string;
  public linkCapa!: string;
}
