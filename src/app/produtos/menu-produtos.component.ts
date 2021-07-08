import { Component, OnInit } from '@angular/core';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu-produtos',
  templateUrl: './menu-produtos.component.html',
  styleUrls: ['./menu-produtos.component.css']
})  
export class MenuProdutosComponent implements OnInit {

  listaProduto: ProdutosServicos[]
  constructor(
    private produtoService: ProdutoService
  ) {}

  ngOnInit(){
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutosServicos[]) => {
      this.listaProduto = resp
    })
  }
}
