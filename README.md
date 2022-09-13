# BPJS Kesehatan Indonesia
PHP package to access BPJS Kesehatan API :ambulance:.
This package is a wrapper of BPJS VClaim, Antrean Web Service
https://dvlp.bpjs-kesehatan.go.id:8888/trust-mark

#### Installation :fire:
`npm i bpjs-library`

## File .env
- Duplicate `.env.example` file
- Change filename to `.env`
- Use your own BPJS config
- Host Development VClaim : https://apijkn-dev.bpjs-kesehatan.go.id/vclaim-rest-dev/
- Host Production VClaim : https://apijkn.bpjs-kesehatan.go.id/vclaim-rest/
- Host Development Antrean RS : https://apijkn-dev.bpjs-kesehatan.go.id/antreanrs_dev/
- Host Production Antrean RS : https://apijkn.bpjs-kesehatan.go.id/antreanrs/

#### Example Usage :confetti_ball:
```javascript
// use Referensi service
import WSBpjs from "./src/Antrean/WSBpjs";
import Sep from "./src/VClaim/Sep";

const antrean = new WSBpjs();
antrean.refPoli().then(function(response) {
  console.log(response);
});

const vc = new Sep();
vc.fingerprintList('2022-09-12').then(function(response) {
  console.log(response);
});
```

#### Supported Services (WIP) :rocket:

- [x] LPK
- [x] Monitoring
- [x] Peserta
- [x] PRB
- [x] Referensi
- [x] Rencana Kontrol
- [x] Rujukan
- [x] SEP
- [x] Antrean RS WS BPJS
