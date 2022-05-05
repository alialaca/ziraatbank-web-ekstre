const queryString = require('./utils/queryString')
const axiosInstance = require('./utils/axios')

class ZiraatBank {
    constructor(kurumKod, sifre) {
        this.config = {
            KurumKod: kurumKod,
            Sifre: sifre
        }
        this.axios = axiosInstance('https://hesap.ziraatbank.com.tr/HEK_NKYWS/HesapHareketleri.asmx')
    }

    hesapEkstre(hesapNo, baslangicTarihi, bitisTarihi){
        return new Promise((resolve, reject) => {
            this.axios.post(
                'HesapEkstre',
                queryString.stringfy({
                    ...this.config,
                    HesapNo: hesapNo,
                    BaslangicTarihi: baslangicTarihi,
                    BitisTarihi: bitisTarihi
                }))
                .then(response =>  resolve(response.data))
                .catch(reject)
        })
    }
}

module.exports = ZiraatBank