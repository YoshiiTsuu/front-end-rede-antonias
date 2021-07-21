import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { ProdutosServicos } from '../model/ProdutosServicos';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
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
  idProduto: number
  listaCategoria: Categoria[]
  categoria: Categoria = new Categoria()
  idCategoria: number
  usuario: Usuario = new Usuario()
  //(antes) idUsuario: number
  idUsuario = environment.id
  id = environment.id
  foto = environment.foto
  nome = environment.nome

  show: boolean = false
  show2: boolean = true

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      // alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idProduto)
    this.findAllProdutos()
    this.findAllCategoria()
    this.findByIdUsuario()
  }
  //true = produtos e false = serviços
  setRadio(resp: boolean) {
    this.produtoOuServico = resp
    this.produto.escolhaServicosProdutos = this.produtoOuServico
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: ProdutosServicos[]) => {
      this.listaProduto = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
    })
  }
  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findByIdProdutos(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: ProdutosServicos) => {
      this.produto = resp
    })
  }
  // Esta parte não funciona É O FINDBYUSUARIO! PRA PODER USAR O GET ID NO BOTÃO DE EDITAR DADOS PESSOAIS 
  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  //Mudei de lugar o cadastrar 
  cadastrar() {

    //adicionei
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria
    this.usuario.id = this.idUsuario
    this.produto.usuario = this.usuario
    //

    this.produtoService.postProdutos(this.produto).subscribe((resp: ProdutosServicos) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Produto/Serviço cadastrado com sucesso!')
      this.findAllProdutos()
      this.produto = new ProdutosServicos
    })
  }

  atualizarProdutos() {
    this.produtoService.putProduto(this.produto).subscribe((resp: ProdutosServicos) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Produto/Serviço atualizado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }

  deletarProdutos() {
    this.produtoService.deleteProduto(this.idProduto).subscribe(() => {
      this.alertas.showAlertSuccess('Produto/Serviço apagado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }

  showSelect() {
    this.show = !this.show;
    this.show2 = !this.show2;
  }

  refresh() {
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/usuario"])
    })
  }

  sair() {
    this.router.navigate(['/quemsomos'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
