import { ProdutosServicos } from "./ProdutosServicos"

export class Categoria{
    public id : number
    public produtoServicos : string
    public palavraChave : string
    public descricao : string
    public servicos : ProdutosServicos[]
}