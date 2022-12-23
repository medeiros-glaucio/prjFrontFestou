export class Cliente {
  id: string;
  idade: number;
  nome: string;
  telefone: string;
  email: string;
  contratos: Array<string>;

  constructor(id: string, idade: number, nome: string, telefone: string, email: string, contratos: Array<string>) {
    this.id = id;
    this.idade = idade;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.contratos = contratos;
  }
}
