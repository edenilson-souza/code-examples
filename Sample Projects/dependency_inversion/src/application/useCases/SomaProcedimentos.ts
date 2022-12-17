import Procedimento from "../../domain/entities/Procedimento";

export default class SomaProcedimentos {
    procedimentos: Procedimento[];

    constructor(procedimentos: Procedimento[]){
        this.procedimentos = procedimentos;

    }

    execute (): number {

        let valorTotal = 0;

        for(const procedimento of this.procedimentos){
            const valor_procedimento = procedimento.getValor();
            valorTotal += valor_procedimento;
        }

        return valorTotal;  
    }
}