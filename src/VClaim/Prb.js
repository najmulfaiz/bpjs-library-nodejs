import BpjsService from "../BpjsService";

export default class Prb extends BpjsService {
  insertPRB(data = []) {
    return this.requestVClaim('post', 'PRB/insert', data);
  }

  updatePRB(data = []) {
    return this.requestVClaim('put', 'PRB/Update', data);
  }

  deletePRB(data = []) {
    return this.requestVClaim('delete', 'PRB/Delete', data);
  }

  cariBySRB(noSrb, noSep) {
    return this.requestVClaim('get', 'prb/' + noSrb + '/nosep/' + noSep);
  }

  cariByTanggal(tglMulai, tglAkhir) {
    return this.requestVClaim('get', 'prb/tglMulai/' + tglMulai + '/tglAkhir/' + tglAkhir);
  }
}