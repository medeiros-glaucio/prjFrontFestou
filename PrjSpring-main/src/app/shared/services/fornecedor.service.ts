import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fornecedor} from '../model/fornecedor';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  URL_FORNECEDORES = 'http://localhost:8021/api/festou';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Fornecedor[]> {
    return this.httpClient.get<Fornecedor[]>(this.URL_FORNECEDORES)

  }

  inserir(novoFornecedor: Fornecedor): Observable<Fornecedor> {
    return this.httpClient.post<Fornecedor>(
        this.URL_FORNECEDORES, novoFornecedor);
  }

  // DELETE /fornecedores/3
  apagar(idParaRemocao: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_FORNECEDORES}/${idParaRemocao}`);
  }

  pesquisarPorId(id: string): Observable<Fornecedor> {
    return this.httpClient.get<Fornecedor>(`${this.URL_FORNECEDORES}/${id}`);
  }

  atualizar(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.httpClient
        .put<Fornecedor>(`${this.URL_FORNECEDORES}/${fornecedor.id}`, fornecedor);
  }
}


