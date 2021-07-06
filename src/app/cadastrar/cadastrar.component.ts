import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  confirmarSenha: string;
  tipoUsuario: boolean;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  ngOnInit() {
    window.scroll(0, 0)
  }
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
  setRadio(resp: boolean) {
    this.tipoUsuario = resp
    this.usuario.vendedor = this.tipoUsuario
  }
  cadastrar() {
    if (this.usuario.senha == this.confirmarSenha) {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
      }) //subscribe serve para que o objeto não seja enviado da forma json
      alert('Cadastro concluído com sucesso!')
   
    }
    else {
      alert('As senhas não coincidem!')
    }
  }
}