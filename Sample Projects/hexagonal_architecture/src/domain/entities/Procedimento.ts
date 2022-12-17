type Data = {
    nome: string;
    valor: number;
};

export default class Procedimento {
    private nome: string;
    private valor: number;

    constructor({ nome, valor }: Data) {
        this.nome = nome;
        this.valor = valor;
    }

    getNome() {
        return this.nome;
    }
    getValor() {
        return this.valor;
    }
    updateNome(novoNome: string) {
        this.nome = novoNome;
    }
    updateValor(novoValor: number) {
        this.valor = novoValor;
    }
}
