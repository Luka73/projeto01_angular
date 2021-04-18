import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

//importando a biblioteca de rotas do angular..
import { Routes, RouterModule } from '@angular/router';

//importando a bilbioteca para executar chamadas na API
import { HttpClientModule } from '@angular/common/http';

//importando as bilbiotecas para desenvolvimento de formulários reativos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//mapeamento das rotas para acesso aos componentes
const routes: Routes = [
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'consulta-clientes', component: ConsultaClientesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //registrando
    FormsModule, //registrando
    ReactiveFormsModule, //registrando
    //registrando o mapeamento de rotas criado no projeto
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

