import BpjsService from '+./BpjsService';

export default class Rujukan extends BpjsService {
  cariByNoRujukan(searchBy, keyword) {
    if (searchBy == 'RS') {
      url = 'Rujukan/RS/' + keyword;
    } else {
      url = 'Rujukan/' + keyword;
    }
    return this.get(url);
  }

  cariByNoKartu(searchBy, keyword, multi = false) {
    record = multi ? 'List/' : '';
    if (searchBy == 'RS') {
      url = 'Rujukan/RS/' + record + 'Peserta/' + keyword;
    } else {
      url = 'Rujukan/' + record + 'Peserta/' + keyword;
    }
    return this.get(url);
  }

  cariByTglRujukan(searchBy, keyword) {
    if (searchBy == 'RS') {
      url = 'Rujukan/RS/TglRujukan/' + keyword;
    } else {
      url = 'Rujukan/List/Peserta/' + keyword;
    }
    return this.get(url);
  }

  insertRujukan(data = []) {
    return this.post('Rujukan/insert', data);
  }

  updateRujukan(data = []) {
    return this.put('Rujukan/update', data);
  }

  deleteRujukan(data = []) {
    return this.delete('Rujukan/delete', data);
  }

  insertRujukanKhusus(data = []) {
    return this.post('Rujukan/Khusus/insert', data);
  }

  deleteRujukanKhusus(data = []) {
    return this.delete('Rujukan/Khusus/delete', data);
  }

  cariRujukanKhusus(bulan, tahun) {
    return this.get('Rujukan/Khusus/List/Bulan/' + bulan + '/Tahun/' + tahun);
  }

  insertRujukan2(data = []) {
    return this.post('Rujukan/2.0/insert', data);
  }

  updateRujukan2(data = []) {
    return this.put('Rujukan/2.0/Update', data);
  }

  spesialistikRujukan(ppkRujukan, tglRujukan) {
    return this.get('Rujukan/ListSpesialistik/PPKRujukan/' + ppkRujukan + '/TglRujukan/' + tglRujukan);
  }

  sarana(ppkRujukan) {
    return this.get('Rujukan/ListSarana/PPKRujukan/' + ppkRujukan);
  }

  listRujukanKeluarRS(tglMulai, tglAkhir) {
    return this.get('Rujukan/Keluar/List/tglMulai/' + tglMulai + '/tglAkhir/' + tglAkhir);
  }

  listRujukanKeluarRSByNoRujukan(noRujukan) {
    return this.get('Rujukan/Keluar/' + noRujukan);
  }

  dataJumlahSepRujukan(jenisRujukan, noRujukan) {
    return this.get('Rujukan/JumlahSEP/' + jenisRujukan + '/' + noRujukan);
  }
}