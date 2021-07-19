import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './../service/produto.service';
import { CategoriaService } from './../service/categoria.service';
import { ProdutosServicos } from './../model/ProdutosServicos';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  produto: ProdutosServicos = new ProdutosServicos()
  listaProduto: ProdutosServicos[]
  listaCategoria: Categoria[]
  idProduto : number

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
      this.router.navigate(['/ver-produto', idCat])
    })
  }
}
