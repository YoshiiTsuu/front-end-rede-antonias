import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProdutosServicos } from '../model/ProdutosServicos';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllProdutos(): Observable<ProdutosServicos[]>{
    return this.http.get<ProdutosServicos[]>('https://redeantonias.herokuapp.com/produtosservicos', this.token)
  }
  postProdutos(produtos: ProdutosServicos): Observable<ProdutosServicos>{
    return this.http.post<ProdutosServicos>('https://redeantonias.herokuapp.com/produtosservicos', produtos, this.token)
  }
}
