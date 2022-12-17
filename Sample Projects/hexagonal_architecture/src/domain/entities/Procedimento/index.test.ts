import Procedimento from './';

describe('Entity Procedimento', () => {
    test('Deve criar um procedimento', () => {
        const procedimento = new Procedimento({ nome: 'John Doe', valor: 4564611 });
        expect(procedimento.getNome()).toBe('John Doe');
        expect(procedimento.getValor()).toBe(4564611);
    });

    test('Deve atualizar nome de um procedimento', () => {
        const procedimento = new Procedimento({ nome: 'John Doe', valor: 4564611 });
        procedimento.updateNome('Kyle John');

        expect(procedimento.getNome()).toBe('Kyle John');
        expect(procedimento.getValor()).toBe(4564611);
    });

    test('Deve atualizar valor de um procedimento', () => {
        const procedimento = new Procedimento({ nome: 'John Doe', valor: 4564611 });
        procedimento.updateValor(62521);

        expect(procedimento.getNome()).toBe('John Doe');
        expect(procedimento.getValor()).toBe(62521);
    });
});
