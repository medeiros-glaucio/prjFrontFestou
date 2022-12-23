import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import { ListagemFornecedorComponent } from './listagem-fornecedor/listagem-fornecedor.component';
import {PipesModule} from "../shared/pipes/pipes.module";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {NgMaterialModule} from "../ng-material/ng-material.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    CadastroFornecedorComponent,
    ListagemFornecedorComponent
  ],
    imports: [
        CommonModule,
        PipesModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        NgMaterialModule,
        MatIconModule
    ],
    exports: [
        CadastroFornecedorComponent,
        ListagemFornecedorComponent
    ]
})
export class FornecedorModule { }
