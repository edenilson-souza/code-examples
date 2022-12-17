import Procedimento from "../../domain/entities/Procedimento"

test("Deve criar um procedimento", ()=> {

    const procedimento = new Procedimento({nome: "John Doe", valor: 4564611});
    expect(procedimento.getNome()).toBe("John Doe")

});