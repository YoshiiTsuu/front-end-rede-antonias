import { VerProdutoComponent } from './app/ver-produto/ver-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './app/cadastrar/cadastrar.component';
import { EntrarComponent } from './app/entrar/entrar.component';
import { MenuProdutosComponent } from './app/produtos/menu-produtos.component';
import { QuemSomosComponent } from './app/quem-somos/quem-somos.component';
import { UsuarioComponent } from './app/cadastro-produto/usuario.component';
import { UsuarioEditComponent } from './app/edit/usuario-edit-delete/usuario-edit.component';
import { ProdutoEditComponent } from './app/edit/produto-edit/produto-edit.component';
import { CadastrarCategoriaComponent } from './app/cadastrar-categoria/cadastrar-categoria.component';
import { ServicosComponent } from './app/servicos/servicos.component';
import { PgCategoriaComponent } from './app/pg-categoria-produtos/pg-categoria.component';
import { PgCategoriaServicosComponent } from './app/pg-categoria-servicos/pg-categoria-servicos.component';
import { VerServicoComponent } from './app/ver-servico/ver-servico.component';

const routes: Routes = [
  { path: '', redirectTo: 'quemsomos', pathMatch: 'full' },
  { path: 'quemsomos', component: QuemSomosComponent },
  { path: 'produtos', component: MenuProdutosComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'categoria', component: CadastrarCategoriaComponent },
  { path: 'usuario-editar/:id', component: UsuarioEditComponent },
  { path: 'produto-editar/:id', component: ProdutoEditComponent },
  { path: 'produto-delete/:id', component: ProdutoEditComponent },
  { path: 'usuario-delete/:id', component: UsuarioEditComponent },
  { path: 'ver-produto/:id', component: VerProdutoComponent }, //Não coloquei o id aqui pois não funcionou anteriormente
  { path: 'produtos-categorias/:id', component: PgCategoriaComponent },
  { path: 'produtos-categorias-servico/:id', component: PgCategoriaServicosComponent },
  { path: 'ver-servico/:id', component: VerServicoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

