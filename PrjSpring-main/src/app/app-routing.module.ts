import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemClienteComponent} from './cliente/listagem-cliente/listagem-cliente.component';
import {CadastroClienteComponent} from './cliente/cadastro-cliente/cadastro-cliente.component';
import {ListagemFornecedorComponent} from "./fornecedor/listagem-fornecedor/listagem-fornecedor.component";
import {CadastroFornecedorComponent} from "./fornecedor/cadastro-fornecedor/cadastro-fornecedor.component";

//import {CadastroListagemComponent} from './cliente/cadastro-listagem/cadastro-listagem.component';

const routes: Routes = [
  {
    path: "listagemcliente",
    component: ListagemClienteComponent
  },
  {
    path: "cadastrocliente",
    component: CadastroClienteComponent
  },
  {
    path: "editacliente/:id",
    component: CadastroClienteComponent
  },

  {
    path: "listagemfornecedor",
    component: ListagemFornecedorComponent
  },
  {
    path: "cadastrofornecedor",
    component: CadastroFornecedorComponent
  },
  {
    path: "editafornecedor/:id",
    component: CadastroFornecedorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

