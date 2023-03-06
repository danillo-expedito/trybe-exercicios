
const { mapString, encode, decode } = require('./mapString' );


describe ('Testa se a função mapString', () => {
    it('Testa se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    it('Testa se encode tem o retorno esperado', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });
    it('Testa se decode tem o retorno esperado', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });
    it('Testa se outras letras são convertidas', () => {
        expect(encode('b, c, d, f, g')).toBe('b, c, d, f, g');
        expect(decode('6, 7, 8, 9, 0')).toBe('6, 7, 8, 9, 0');
    });
    it('Testa se o comprimento da string continua o mesmo', () => {
        expect(encode('a, e, i, o, u')).toHaveLength(13);
    })
});