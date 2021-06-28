import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuProdutosComponent } from './app/produtos/menu-produtos.component';
import { QuemSomosComponent } from './app/quem-somos/quem-somos.component';


const routes: Routes=[
  {path: '', redirectTo: 'quemsomos', pathMatch: 'full'},
  {path: 'quemsomos', component: QuemSomosComponent},
  {path: 'produtos', component: MenuProdutosComponent}
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

