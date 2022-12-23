import { Component, OnInit } from '@angular/core';
import {Fornecedor} from '../../shared/model/fornecedor';
import {ActivatedRoute} from '@angular/router';
import {FornecedorService} from '../../shared/services/fornecedor.service';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.scss']
})
export class CadastroFornecedorComponent implements OnInit {

  fornecedorAtual: Fornecedor;

  inserindo: boolean = true;
  nomeBotao: string = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private fornecedorService: FornecedorService) {
    this.fornecedorAtual = new Fornecedor('', '', '', '', 0);
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const fornecedorEncontrado = this.fornecedorService.pesquisarPorId(idParaEdicao).subscribe(
            fornecedorEncontrado => this.fornecedorAtual = fornecedorEncontrado
        );
      }
    }
  }

  ngOnInit() {
  }

  inserirOuAtualizarFornecedor() {
    if (this.inserindo) {
      this.fornecedorService.inserir(this.fornecedorAtual).subscribe(
          fornecedorInserido => console.log(fornecedorInserido)
      );
      this.fornecedorAtual = new Fornecedor('', '', '', '', 0);
    } else {
      this.fornecedorService.atualizar(this.fornecedorAtual).subscribe(
          fornecedorAtualizado => console.log(fornecedorAtualizado)
      )
    }
  }

  // atualizaNome(novoNome: string) {
  //   this.fornecedorAtual.nome = novoNome;
  // }
}
