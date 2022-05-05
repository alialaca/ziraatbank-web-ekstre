const queryString = require('./utils/queryString')
const axiosInstance = require('./utils/axios')

class ZiraatBank {
    constructor(KurumKod, Sifre) {
        this.config = {KurumKod, Sifre}
        this.axios = axiosInstance('https://hesap.ziraatbank.com.tr/HEK_NKYWS/HesapHareketleri.asmx')
    }

    hesapEkstre(HesapNo, BaslangicTarihi, BitisTarihi){
        return new Promise((resolve, reject) => {
            this.axios.post('HesapEkstre', queryString.stringfy({...this.config, HesapNo, BaslangicTarihi, BitisTarihi}))
                .then(response =>  resolve(response.data))
                .catch(reject)
        })
    }
}

module.exports = ZiraatBank