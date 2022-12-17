import DataStorage from '../../infra/repository/DataStorage';
import SomaProcedimento from '../../domain/useCases/Procedimento/SomaProcedimentos';

export default class ProcedimentoDatabaseService {
    constructor(private dataStorage: DataStorage) {}

    saveSomaProcedimentos(listProcedimentos: any) {
        const soma = new SomaProcedimento(listProcedimentos);+
        this.dataStorage.save(soma);
    }
}
