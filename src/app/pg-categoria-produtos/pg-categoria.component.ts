import { ProdutoService } from '../service/produto.service';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-pg-categoria',
  templateUrl: './pg-categoria.component.html',
  styleUrls: ['./pg-categoria.component.css']
})
export class PgCategoriaComponent implements OnInit {
  produtos: ProdutosServicos = new ProdutosServicos()
  listaProduto: ProdutosServicos[]

  categoria: Categoria = new Categoria()
  idCategoria: number
  listaCategoria: Categoria[]
  busca: string
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
  refresh(idCat: number){
    this.router.navigateByUrl('/quemsomos', { skipLocationChange: true }).then(() =>{
         this.router.navigate(['/produtos-categorias',idCat])
    })
  }

//   refresh2(){
//     this.router.navigateByUrl('/quemsomos', { skipLocationChange: true }).then(() =>{
//         this.router.navigate(["/pesquisar",this.busca])
//     })
// }

}