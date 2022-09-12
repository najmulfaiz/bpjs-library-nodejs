import BpjsService from "../BpjsService";

export default class WSBpjs extends BpjsService {
  refPoli() {
    return this.requestAntrol('get', 'ref/poli');
  }

  refDokter() {
    return this.requestAntrol('get', 'ref/dokter');
  }

  refJadwalDokter(kodepoli, tanggal) {
    return this.requestAntrol('get', 'jadwaldokter/kodepoli/' + kodepoli + '/tanggal/' + tanggal);
  }

  updateJadwalDokter(data = []) {
    return this.requestAntrol('post', 'jadwaldokter/updatejadwaldokter', data);
  }

  tambahAntrean(data = []) {
    return this.requestAntrol('post', 'antrean/add', data);
  }

  updateWaktuAntrean(data = []) {
    return this.requestAntrol('post', 'antrean/updatewaktu', data);
  }

  batalAntrean(data = []) {
    return this.requestAntrol('post', 'antrean/batal', data);
  }

  listWaktuTaskId(data = []) {
    return this.requestAntrol('post', 'antrean/getlisttask', data);
  }

  dashboardPerTanggal(tanggal, waktu) {
    return this.requestAntrol('get', 'dashboard/waktutunggu/tanggal/' + tanggal + '/waktu/' + waktu);
  }

  dashboardPerBulan(bulan, tahun, waktu) {
    return this.requestAntrol('get', 'dashboard/waktutunggu/bulan/' + bulan + '/tahun/' + tahun + '/waktu/' + waktu);
  }
}