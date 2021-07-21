import { Usuario } from './../model/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  usuario: Usuario = new Usuario
  idUsuario = environment.id
  nome = environment.nome
  vendedor = environment.vendedor
  id = environment.id

  constructor(
    public auth: AuthService,
    public router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  findByIdUsuarios() {
    this.auth.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
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
