const queryString = require('../../lib/utils/queryString')

describe('QueryString', () => {
    test('Should throw a error if parameters not be object', () => {
        const invalid_params= [
            ["Array"],
            "String",
            0,
            false
        ]

        for (let param of invalid_params){
            expect(() => queryString.stringfy(param)).toThrowError('Data must be object')
        }
    })

    test('Should be return correct data', () => {
        const data = {
            name: "Ali",
            surname: "Alaca",
            age: 32
        }
        const string_data = 'name=Ali&surname=Alaca&age=32'

        const string = queryString.stringfy(data)

        expect(typeof string).toBe('string')
        expect(string).toBe(string_data)
    })
})