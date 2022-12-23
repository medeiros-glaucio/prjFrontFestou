import { Component, OnInit } from '@angular/core';
import {Fornecedor} from '../../shared/model/fornecedor';
import {Router} from '@angular/router';
import {FornecedorService} from '../../shared/services/fornecedor.service';

@Component({
  selector: 'app-listagem-fornecedor',
  templateUrl: './listagem-fornecedor.component.html',
  styleUrls: ['./listagem-fornecedor.component.scss']
})
export class ListagemFornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];

  constructor(private roteador: Router, private fornecedorService: FornecedorService) {
    this.fornecedores = new Array<Fornecedor>();
  }

  ngOnInit(): void {
    this.fornecedorService.listar().subscribe(
        fornecedoresRetornados => this.fornecedores = fornecedoresRetornados
    );
  }

  removerFornecedor(fornecedorARemover: Fornecedor): void {
    this.fornecedorService.apagar(fornecedorARemover.id).subscribe(
        removido => {
          console.log(removido);
          const indxFornecedor = this.fornecedores.findIndex(u => u.id === fornecedorARemover.id);

          if (indxFornecedor > -1) {
            this.fornecedores.splice(indxFornecedor, 1);
          }

        }
    );
  }

}
