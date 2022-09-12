import * as dotenv from 'dotenv';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import LZString from 'lz-string';
import _ from 'lodash';

dotenv.config();

export default class BpjsService {
  CONS_ID          = process.env.CONS_ID;
  CONS_SECRET      = process.env.CONS_SECRET;
  USERKEY_VCLAIM   = process.env.USERKEY_VCLAIM;
  USERKEY_ANTREAN  = process.env.USERKEY_ANTREAN;
  BASE_URL_VCLAIM  = process.env.BASE_URL_VCLAIM;
  BASE_URL_ANTREAN = process.env.BASE_URL_ANTREAN;

  constructor() {
    this.setTimestamp();
    this.setSignature();
  }

  setHeader(service_type) {
    this.headers = {
      'Content-Type': 'application/json',
      'X-cons-id': this.CONS_ID,
      'X-timestamp': this.timestamp,
      'X-signature': this.signature,
      'user_key': service_type == 'antrean' ? this.USERKEY_ANTREAN : this.USERKEY_VCLAIM,
    }
  }

  setTimestamp() {
    this.timestamp = Math.floor(Date.now() / 1000);
  }

  setSignature() {
    const hash = CryptoJS.HmacSHA256(this.CONS_ID + '&' + this.timestamp, this.CONS_SECRET);
    this.signature = CryptoJS.enc.Base64.stringify(hash);
  }

  requestAntrol(method, service, data = []) {
    const self = this;
    this.setHeader('antrean');

    return axios({
      method: method,
      url: this.BASE_URL_ANTREAN + service,
      headers: this.headers,
      data: _.includes(['post', 'put', 'delete'], method) ? data : null,
    }).then(function (response) {
      return self.responseAntrol(response.data);
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  responseAntrol(data) {
    const result = data;

    if(_.includes([200, 1], result.metadata.code) && result.response && _.isString(result.response)) {
      return this.decryptResponse(result.metadata, result.response);
    }

    return data;
  }

  requestVClaim(method, service) {
    const self = this;
    this.setHeader('vclaim');

    return axios({
      method: method,
      url: this.BASE_URL_VCLAIM + service,
      headers: this.headers,
      data: _.includes(['post', 'put', 'delete'], method) ? data : null,
    }).then(function (response) {
      return self.responseVClaim(response.data);
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  responseVClaim(data) {
    const result = data;

    if(result.metaData.code == 200 && _.isString(result.response)) {
      return this.decryptResponse(result.metaData, result.response);
    }

    return data;
  }

  decryptResponse(metadata, response) {
    const passphrase = this.CONS_ID + this.CONS_SECRET + this.timestamp;
    const key = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(passphrase).toString());
    const iv = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(passphrase).toString().slice(0, 32));
    const decrypted = CryptoJS.AES.decrypt(response, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);

    return {
      "metadata": metadata,
      "response": JSON.parse(LZString.decompressFromEncodedURIComponent(decrypted))
    };
  }
}