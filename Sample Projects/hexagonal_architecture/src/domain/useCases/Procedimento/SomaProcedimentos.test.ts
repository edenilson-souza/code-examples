import Procedimento from '../../entities/Procedimento';
import SomaProcedimentos from './SomaProcedimentos';

describe('Use Case Procedimento', () => {
    test('Deve calcular valores totais da lista de procedimentos', () => {
        const procedimento_one = new Procedimento({ nome: 'joe', valor: 12 });
        const procedimento_two = new Procedimento({ nome: 'kyle', valor: 18 });
        const procedimento_tree = new Procedimento({ nome: 'carl', valor: 5 });

        const somaProcedimentos = new SomaProcedimentos([procedimento_one, procedimento_two, procedimento_tree]);

        const result = somaProcedimentos.execute();
        expect(result).toBe(35);
    });
});
