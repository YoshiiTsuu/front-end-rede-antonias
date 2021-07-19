import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-pg-categoria-servicos',
  templateUrl: './pg-categoria-servicos.component.html',
  styleUrls: ['./pg-categoria-servicos.component.css']
})
export class PgCategoriaServicosComponent implements OnInit {
  produtos: ProdutosServicos = new ProdutosServicos()
  listaProduto: ProdutosServicos[]

  categoria: Categoria = new Categoria()
  idCategoria: number
  listaCategoria: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria()
    this.findAllProdutos()
    this.findAllCategoria()
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutosServicos[]) => {
      this.listaProduto = resp
    })
  }
  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }
  refresh(idCat: number) {
    this.router.navigateByUrl('/quemsomos', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/produtos-categorias-servico', idCat])
    })
  }
}