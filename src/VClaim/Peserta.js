import BpjsService from "../BpjsService";

export default class Peserta extends BpjsService {
  getByNoKartu(noKartu, tglPelayananSEP) {
    return this.requestVClaim('get', 'Peserta/nokartu/' + noKartu + '/tglSEP/' + tglPelayananSEP);
  }
  getByNIK(nik, tglPelayananSEP) {
    return this.requestVClaim('get', 'Peserta/nik/' + nik + '/tglSEP/' + tglPelayananSEP);
  }
}