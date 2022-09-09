const CryptoJS = require('crypto-js');
const axios = require('axios');
const LZString = require('lz-string');

class BpjsService {
  constructor() {
    this.BASE_URL = process.env.BASE_URL;
    this.CONS_ID = process.env.CONS_ID;
    this.CONS_SECRET = process.env.CONS_SECRET;
    this.USERKEY = process.env.USERKEY;
  }

  setHeader() {
    this.headers = {
      'Content-Type': 'application/json',
    'X-cons-id': this.BASE_URL,
    'X-timestamp': this.timestamp,
    'X-signature': this.signature,
    'user_key': this.USERKEY,
    }
  }

  setTimestamp() {
    this.timestamp = Math.floor(Date.now() / 1000);
  }

  setSignature() {
    const hash = CryptoJS.HmacSHA256(this.CONS_ID + '&' + this.timestamp, this.CONS_SECRET);
    this.signature = CryptoJS.enc.Base64.stringify(hash);
  }

  get() {
    axios({
      method: 'get',
      url: this.BASE_URL + '/antreanrs/ref/poli',
      headers: {
        'Content-Type': 'application/json',
        'X-cons-id': this.CONS_ID,
        'X-timestamp': timestamp,
        'X-signature': signature,
        'user_key': this.USERKEY,
      }
    }).then(function(res) {
      let passphrase = this.CONS_ID + this.CONS_SECRET + timestamp;
      let response = decrypt_data(passphrase, res.data.response);
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  responseAntrol(passphrase, data) {
    let key = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(passphrase).toString());
    let iv = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(passphrase).toString().substr(0, 32));
    let decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    decompressed = LZString.decompressFromEncodedURIComponent(decrypted);
    
    return decompressed;
  }
}

export default BpjsService