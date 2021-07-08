import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosServicos } from 'src/app/model/ProdutosServicos';
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

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idProduto)
  }

  findByIdProdutos(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutosServicos) => {
      this.produto = resp
    })
  }
  
  atualizarProdutos() {
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
