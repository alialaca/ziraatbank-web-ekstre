const ZiraatBank = require('../lib')
require('dotenv').config()

describe('ZiratBank class', () => {
    let ziraatBank
    beforeEach(() => {
        ziraatBank = new ZiraatBank(process.env.ZIRAATBANK_KURUM_KOD, process.env.ZIRAATBANK_SIFRE)

    })

    describe('HesapEkstre()', () => {
        // test('Should return error if date parameters are invalid', async () => {
        //     expect(() => ziraatBank.hesapEkstre('', '20225.04.15', '2022.04.19')).toThrowError()
        // })

        test('Should return data if all params is valid', async () => {
            const ekstre = await ziraatBank.hesapEkstre('', '2022.04.15', '2022.04.19')

            expect(ekstre).toBeDefined()
        })
    })
})