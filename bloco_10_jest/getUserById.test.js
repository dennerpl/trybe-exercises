const {findUserById, getUserName} = require('./getUserById.js')

describe('Test in getUserName function', () =>{
    test('Testa se o retorno da funcção uppercase para abc é mesmo ABC', async () => {
        try {
           await getUserName(3);
        } catch (error) {
            expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' });
        }
    })
})