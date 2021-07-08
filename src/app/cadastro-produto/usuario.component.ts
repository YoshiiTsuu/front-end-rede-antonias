import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  produto: ProdutosServicos = new ProdutosServicos
  listaProduto: ProdutosServicos[]
  produtoOuServico: boolean
  idProduto : number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idProduto)
    this.findAllProdutos()
  }
  //true = produtos e false = serviços
  setRadio(resp: boolean) {
    this.produtoOuServico = resp
    this.produto.escolhaServicosProdutos = this.produtoOuServico
  }

  cadastrar() {
    this.produtoService.postProdutos(this.produto).subscribe((resp: ProdutosServicos) => {
      this.produto = resp
      alert('Produto/Serviço cadastrado com sucesso!')
      this.findAllProdutos()
      this.produto = new ProdutosServicos
    })
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutosServicos[]) => {
      this.listaProduto = resp
    })
  }

  findByIdProdutos(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:ProdutosServicos)=>{
      this.produto = resp
    })
  }

  atualizarProdutos(){
    this.produtoService.putProduto(this.produto).subscribe((resp:ProdutosServicos)=>{
      this.produto = resp
      alert('Produto/Serviço atualizado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }

  deletarProdutos(){
    this.produtoService.deleteProduto(this.idProduto).subscribe(()=>{
      alert('Produto/Serviço apagado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }


}
