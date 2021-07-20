import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-ver-servico',
  templateUrl: './ver-servico.component.html',
  styleUrls: ['./ver-servico.component.css']
})
export class VerServicoComponent implements OnInit {

  produto: ProdutosServicos = new ProdutosServicos()
  categoria: Categoria = new Categoria()
  listaProduto: ProdutosServicos[]
  listaCategoria: Categoria[]
  idProduto : number
  idCategoria:number
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.findAllProdutos() 
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idProduto)
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria()
    this.findAllCategoria()
  }
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }
  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }
  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp : ProdutosServicos[])=>{
      this.listaProduto=resp
    })
  }
  findByIdProdutos(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:ProdutosServicos)=>{
      this.produto = resp
    })
  }
  refresh(idCat: number) {
    this.router.navigateByUrl('/quemsomos', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/ver-servico', idCat])
    })
  }
}
