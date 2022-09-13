import BpjsService from "../BpjsService";

export default class LembarPengajuanKlaim extends BpjsService {
  insertLPK(data = []) {
    return this.requestVClaim('post', 'LPK/insert', data);
  }
  updateLPK(data = []) {
    return this.requestVClaim('post', 'LPK/update', data);
  }
  deleteLPK(data = []) {
    return this.requestVClaim('post', 'LPK/delete', data);
  }
  cariLPK(tglMasuk, jnsPelayanan) {
    return this.requestVClaim('get', 'LPK/TglMasuk/' + tglMasuk + '/JnsPelayanan/' + jnsPelayanan);
  }
}