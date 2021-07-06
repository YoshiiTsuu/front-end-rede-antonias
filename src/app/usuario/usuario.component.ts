import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  produto: ProdutosServicos = new ProdutosServicos
  listaProduto: ProdutosServicos[]
  produtoOuServico: boolean

  constructor(
    private produtoService: UsuarioService,
    private router: Router

  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }
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


}
