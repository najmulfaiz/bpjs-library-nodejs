const CryptoJS = require('crypto-js');
const axios = require('axios');
const LZString = require('lz-string');

const cons_id = '26823';
const cons_secret = 'rsu643swnd877p';
const userkey = 'db932c2c2feafd32ec1cfad42312c4e9';

let timestamp = Math.floor(Date.now() / 1000);
let hash = CryptoJS.HmacSHA256(cons_id + '&' + timestamp, cons_secret);
let signature = CryptoJS.enc.Base64.stringify(hash);

axios({
  method: 'get',
  url: 'https://apijkn.bpjs-kesehatan.go.id/antreanrs/ref/poli',
  headers: {
    'Content-Type': 'application/json',
    'X-cons-id': cons_id,
    'X-timestamp': timestamp,
    'X-signature': signature,
    'user_key': userkey,
  }
}).then(function (response) {
  let passphrase = cons_id + cons_secret + timestamp;
  let key = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(passphrase).toString());
  let iv = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(passphrase).toString().substr(0, 32));

  console.log(response.data.response);
  
  let decrypted = CryptoJS.AES.decrypt(response.data.response, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  decrypted = decrypted.toString(CryptoJS.enc.Utf8);
  decompressed = LZString.decompressFromEncodedURIComponent(decrypted);
  console.log(decompressed);
})
  .catch(function (error) {
    console.log(error);
  });
