import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  /*Falta adicionar as rotas aqui (com o link do Heroku/nome entrar e cadastrar) */
  entrar(userLogin : UsuarioLogin) : Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://redeantonias.herokuapp.com/usuario/logar',userLogin)
  }

  cadastrar(user : Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>('https://redeantonias.herokuapp.com/usuario/cadastrar',user)
  }

/* Tem que fazer isso para finalizar compra (se não estiver logado não vai finalizar a compra)
  logado(){
    let ok : boolean = false
    if(environment.token != ''){
      ok = true
    }
    return ok
  }
  */
}
