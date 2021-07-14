import { ProdutoService } from './../service/produto.service';
import { CategoriaService } from './../service/categoria.service';
import { ProdutosServicos } from './../model/ProdutosServicos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  produto: ProdutosServicos = new ProdutosServicos()
  listaProduto: ProdutosServicos[]

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos()
  }
  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp : ProdutosServicos[])=>{
      this.listaProduto=resp
    })
  }

}
