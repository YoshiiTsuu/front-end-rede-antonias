import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  categoria: Categoria = new Categoria()
  idCategoria:number
  listaCategoria: Categoria[]
  listaProduto: ProdutosServicos[]
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    window.scroll(0, 0);
    this.findAllProdutos()
    this.findAllCategoria()
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutosServicos[]) => {
      this.listaProduto = resp
    })
  }
  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp:Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  findByIdCategoria(id:number){
    
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp : Categoria)=>{
      this.categoria = resp
    })
  }
} 
