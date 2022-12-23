export class Fornecedor {
    id: string;
    nome: string;
    telefone: string;
    descricao: string
    preco: number;

    constructor(id: string, nome: string, telefone: string, descricao: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.descricao = descricao;
        this.preco = preco;
    }
}