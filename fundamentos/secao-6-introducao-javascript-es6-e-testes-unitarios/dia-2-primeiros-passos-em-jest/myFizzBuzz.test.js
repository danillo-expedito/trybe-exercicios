const myFizzBuzz = require('./myFizzBuzz');

describe ('Testa se a função myFizzBuzz', () => {
    it('Verifica se a função myFizzBuzz retorna o esperado para os parametros passados', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(10)).toBe('buzz');
        expect(myFizzBuzz(4)).toBe(4);
        expect(myFizzBuzz('45')).toBeFalsy();
    })
})