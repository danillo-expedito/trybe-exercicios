const myRemove = require('./myRemove');

describe ('Verifica se a função myRemove funciona de acordo com o esperado', () => {
    it('Verifica se myRemove retorna o esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it ('Verifica se myRemove não retorna o array pŕevio', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifica se myRemove retorna o resultado esperaddo', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })

});