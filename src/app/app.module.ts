import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
=======
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
>>>>>>> 02785cbe082d81fa516279457ca12992bd73cd14

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { MenuProdutosComponent } from './produtos/menu-produtos.component';
import { AppRoutingModule } from 'src/app-routing.module';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    QuemSomosComponent,
    MenuProdutosComponent,
    EntrarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
<<<<<<< HEAD
  providers: [ 
    {provide: LocationStrategy, useClass:HashLocationStrategy}
  ],
=======
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
>>>>>>> 02785cbe082d81fa516279457ca12992bd73cd14
  bootstrap: [AppComponent]
})
export class AppModule { }
