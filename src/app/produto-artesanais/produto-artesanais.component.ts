import { Component, OnInit } from '@angular/core';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-artesanais',
  templateUrl: './produto-artesanais.component.html',
  styleUrls: ['./produto-artesanais.component.css']
})
export class ProdutoArtesanaisComponent implements OnInit {

  listaProduto: ProdutosServicos[]

  constructor(
    private produtoService: ProdutoService,
    private categoriaService : CategoriaService
  ) {}

  ngOnInit(){
    window.scroll(0, 0);
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutosServicos[]) => {
      this.listaProduto = resp
    }) 
  }

}
