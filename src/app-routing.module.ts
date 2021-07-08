import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './app/cadastrar/cadastrar.component';
import { EntrarComponent } from './app/entrar/entrar.component';
import { MenuProdutosComponent } from './app/produtos/menu-produtos.component';
import { QuemSomosComponent } from './app/quem-somos/quem-somos.component';
import { UsuarioComponent } from './app/cadastro-produto/usuario.component';
import { UsuarioEditComponent } from './app/edit/usuario-edit-delete/usuario-edit.component';
import { ProdutoEditComponent } from './app/edit/produto-edit/produto-edit.component';

const routes: Routes=[
  {path: '', redirectTo: 'quemsomos', pathMatch: 'full'},
  {path: 'quemsomos', component: QuemSomosComponent},
  {path: 'produtos', component: MenuProdutosComponent},
  {path: 'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path:'usuario-editar/:id', component:UsuarioEditComponent},
  {path:'produto-editar/:id', component:ProdutoEditComponent},
  {path:'produto-delete/:id', component:ProdutoEditComponent},
  {path:'usuario-delete/:id', component:UsuarioEditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

