const axios = require("axios");
const {XMLParser} = require("fast-xml-parser");

const axiosInstance = (baseURL) =>  axios.create({
        baseURL,
        timeout: 10000,
        headers : {'Content-Type': 'application/x-www-form-urlencoded'},
        transformResponse: [
            (data) => {
                const parser = new XMLParser()
                const jsonData = parser.parse(data)

                if (jsonData.hasOwnProperty('HareketlerBakiye')) {
                    if (jsonData.HareketlerBakiye.hasOwnProperty('hataKodu') && jsonData.HareketlerBakiye.hataKodu !== 0) {
                        return Error(jsonData.HareketlerBakiye.hataAciklamasi)
                    } else {
                        return jsonData.HareketlerBakiye
                    }
                } else {
                    return Error('Bilinmeyen bir hata meydana geldi')
                }
            }
        ]
    })

module.exports = axiosInstance