import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { ProdutosServicos } from 'src/app/model/ProdutosServicos';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: ProdutosServicos = new ProdutosServicos
  listaProduto: ProdutosServicos[]
  produtoOuServico: boolean
  idProduto: number
  categoria: Categoria = new Categoria 
  idCategoria: number
  listaCategoria: Categoria[]


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProdutos(id)
  
  }

  findByIdProdutos(id: number) { 
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutosServicos) => {
      this.produto = resp
    })
  }
  
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=> {this.categoria=resp})
  }
  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {this.listaCategoria=resp})
  }

  atualizarProdutos() {
    this.categoria.id = this.idCategoria;
    this.produto.categoria = this.categoria;
    this.produtoService.putProduto(this.produto).subscribe((resp: ProdutosServicos) => {
      this.produto = resp
      alert('Produto/Serviço atualizado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }

  deletarProdutos() {
    this.produtoService.deleteProduto(this.idProduto).subscribe(() => {
      alert('Produto/Serviço apagado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }
}