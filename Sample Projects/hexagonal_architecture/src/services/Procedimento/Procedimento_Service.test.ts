import Procedimento from '../../domain/entities/Procedimento';
import DataStorage from '../../infra/repository/DataStorage';
import ProcedimentoService from './Procedimento_Service';

const dataStorageFake: DataStorage = {
    async save(data: any) {},
    get: function (params: any) {
        throw new Error('Function not implemented.');
    },
    update: function (params: any, data: any): void {
        throw new Error('Function not implemented.');
    },
    delete: function (params: any): void {
        throw new Error('Function not implemented.');
    }
};

describe('Service Procedimento', () => {
    test('Deve salvar soma de procedimentos', () => {
        try {
            const procedimentoDatabaseService = new ProcedimentoService(dataStorageFake);
            const procedimento_one = new Procedimento({ nome: 'JDISAD', valor: 45456 });
            procedimentoDatabaseService.saveSomaProcedimentos([procedimento_one]);
        } catch (error) {
            throw new Error('Algo deu errado ao salvar procedimento');
        }
    });
});
