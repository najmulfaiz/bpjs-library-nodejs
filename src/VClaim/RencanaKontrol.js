import BpjsService from '+./BpjsService';

export default class RencanaKontrol extends BpjsService {
  insertRencanaKontrol(data = []) {
    return this.requestVClaim('post', 'RencanaKontrol/insert', data);
  }

  updateRencanaKontrol(data = []) {
    return this.requestVClaim('put', 'RencanaKontrol/Update', data);
  }

  deleteRencanaKontrol(data = []) {
    return this.requestVClaim('delete', 'RencanaKontrol/Delete', data);
  }

  insertSPRI(data = []) {
    return this.requestVClaim('post', 'RencanaKontrol/InsertSPRI', data);
  }

  updateSPRI(data = []) {
    return this.requestVClaim('put', 'RencanaKontrol/UpdateSPRI', data);
  }

  cariSEP(keyword) {
    return this.requestVClaim('get', 'RencanaKontrol/nosep/' + keyword);
  }

  cariByNomorSuratKontrol(keyword) {
    return this.requestVClaim('get', 'RencanaKontrol/noSuratKontrol/' + keyword);
  }

  dataNomorSuratKontrolByNomorKartu(bulan, tahun, nokartu, filter) {
    return this.requestVClaim('get', 'RencanaKontrol/ListRencanaKontrol/Bulan/' + bulan + '/Tahun/' + tahun + '/Nokartu/' + nokartu + '/filter/' + filter);
  }

  dataNomorSuratKontrol(tglAwal, tglAkhir, keyword) {
    return this.requestVClaim('get', 'RencanaKontrol/noSuratKontrol/ListRencanaKontrol/tglAwal/' + tglAwal + '/tglAkhir/' + tglAkhir + '/filter/' + keyword);
  }

  dataPoliSpesialistik(jnsKontrol, nomor, tglRencanaKontrol) {
    return this.requestVClaim('get', 'RencanaKontrol/ListSpesialistik/JnsKontrol/' + jnsKontrol + '/nomor/' + nomor + '/TglRencanaKontrol/' + tglRencanaKontrol);
  }

  dataDokter(jnsKontrol, kdPoli, tglRencanaKontrol) {
    return this.requestVClaim('get', 'RencanaKontrol/JadwalPraktekDokter/JnsKontrol/' + jnsKontrol + '/KdPoli/' + kdPoli + '/TglRencanaKontrol/' + tglRencanaKontrol);
  }
}