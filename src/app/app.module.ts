import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { MenuProdutosComponent } from './produtos/menu-produtos.component';
import { AppRoutingModule } from 'src/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    QuemSomosComponent,
    MenuProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
