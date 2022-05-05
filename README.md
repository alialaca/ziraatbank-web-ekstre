# Ziraat Bankası Online Hesap Hareketleri
Node js ile Ziraat Bankası xml web servisine bağlanarak hesap hareketlerini elde etmeyi sağlar. Şimdilik yapabildikleri aşağıdakilerdir. İhtiyaç duydukça eklemeyi düşünüyorum.

- [x] hesapEkstre
- [ ] hesapEkstreZamanIle
- [ ] musteriHesapHareket
- [ ] sorgulaDetayWS
- [ ] sorgulaDetayWSZamanIle
- [ ] sorgulaOzetWS
- [ ] sorgulaOzetWSZamanIle
- [ ] hareketSorgulaVknIle
- [ ] getirPdfDekont
- [ ] getirPdfDekontZamanIle
- [ ] sorgulaHesapHareket
- [ ] sorgulaHesapHareketZamanIle

## Kurulum
```shell
$ npm install --save ziraatbank-web-ekstre
```

## Kullanım
```javascript
const ZiraatBank = require('ziraatbank-web-ekstre')

const banka = new ZiraatBank('KURUM_KOD', 'SIFRE')
```

- Promise ile
```javascript
const hesapNo = ''
const baslangicTarihi = 'YYYY.AA.GG'
const bitisTarihi = 'YYYY.AA.GG'

banka.hesapEkstre(hesapNo, baslangicTarihi, bitisTarihi)
    .then(ekstre => {
        console.log(ekstre)
    })
```

- Async/Await ile
```javascript
const hesapNo = ''
const baslangicTarihi = 'YYYY.AA.GG'
const bitisTarihi = 'YYYY.AA.GG'

const func = async () => {
    const ekstre = await banka.hesapEkstre(hesapNo, baslangicTarihi, bitisTarihi)
    console.log(ekstre)
}
```