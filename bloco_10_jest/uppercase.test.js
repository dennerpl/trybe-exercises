const uppercase = require('./uppercase.js')

describe('Testando se a função uppercase realmente transforma a string como deveria', () =>{
    test('Testa se o retorno da funcção uppercase para abc é mesmo ABC', () => {
        expect(uppercase('abc')).toBe('ABC');
    })
})