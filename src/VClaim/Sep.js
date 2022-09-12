import BpjsService from "../BpjsService";

export default class Sep extends BpjsService {
  insertSEP(data = []) {
    return this.requestVClaim('post', 'SEP/1.1/insert', data);
  }

  updateSEP(data = []) {
    return this.requestVClaim('put', 'SEP/1.1/Update', data);
  }

  deleteSEP(data = []) {
    return this.requestVClaim('delete', 'SEP/Delete', data);
  }

  cariSEP(keyword) {
    return this.get('get', 'SEP/' + keyword);
  }

  insertSEP2(data = []) {
    return this.requestVClaim('post', 'SEP/2.0/insert', data);
  }

  updateSEP2(data = []) {
    return this.requestVClaim('put', 'SEP/2.0/update', data);
  }

  deleteSEP2(data = []) {
    return this.requestVClaim('delete', 'SEP/2.0/delete', data);
  }

  suplesiJasaRaharja(noKartu, tglPelayanan) {
    return this.requestVClaim('get', 'sep/JasaRaharja/Suplesi/' + noKartu + '/tglPelayanan/' + tglPelayanan);
  }

  dataIndukKecelakaan(noKartu) {
    return this.requestVClaim('get', 'sep/KllInduk/List/' + noKartu);
  }

  pengajuanPenjaminanSep(data = []) {
    return this.requestVClaim('post', 'Sep/pengajuanSEP', data);
  }

  approvalPenjaminanSep(data = []) {
    return this.requestVClaim('post', 'Sep/aprovalSEP', data);
  }

  updateTglPlg(data = []) {
    return this.requestVClaim('put', 'Sep/updtglplg', data);
  }

  updateTglPlg2(data = []) {
    return this.requestVClaim('put', 'SEP/2.0/updtglplg', data);
  }

  listDataUpdateTglPlg2(bulan, tahun, filter) {
    return this.requestVClaim('get', 'Sep/updtglplg/list/bulan/' + bulan + '/tahun/' + tahun + '/' + filter);
  }

  inacbgSEP(keyword) {
    return this.requestVClaim('get', 'sep/cbg/' + keyword);
  }

  dataSEPInternal(nosep) {
    return this.requestVClaim('get', 'SEP/Internal/' + nosep);
  }

  deleteSEPInternal(data = []) {
    return this.requestVClaim('delete', 'SEP/Internal/delete', data);
  }

  fingerprint(noKartu, tglPelayanan) {
    return this.requestVClaim('get', 'SEP/FingerPrint/Peserta/' + noKartu + '/TglPelayanan/' + tglPelayanan);
  }

  fingerprintList(tglPelayanan) {
    return this.requestVClaim('get', 'SEP/FingerPrint/List/Peserta/TglPelayanan/' + tglPelayanan);
  }
}