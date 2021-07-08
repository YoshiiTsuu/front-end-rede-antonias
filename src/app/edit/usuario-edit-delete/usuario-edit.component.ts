import { Usuario } from './../../model/Usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario
  idUsuario : number

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/entrar'])
    }
    this.idUsuario= this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  findByIdUsuario(id:number){
    this.authService.getByIdUsuario(id).subscribe((resp:Usuario)=>{
      this.usuario = resp
    })
  }

  atualizarUsuario(){
    this.authService.putUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
      alert('Usuário atualizado com sucesso!')
      this.router.navigate(['/usuario-editar'])
    })
  }

  deletarUsuario(){
    this.authService.deleteUsuario(this.idUsuario).subscribe(()=>{
      alert('Usuário apagado com sucesso!')
      this.router.navigate(['/usuario-editar'])
    })
  }

}
