import BpjsService from "../BpjsService";

export default class Monitoring extends BpjsService {
  dataKunjungan(tglSep, jnsPelayanan) {
    return this.requestVClaim('get', 'Monitoring/Kunjungan/Tanggal/' + tglSep + '/JnsPelayanan/' + jnsPelayanan);
  }
  dataKlaim(tglPulang, jnsPelayanan, statusKlaim) {
    return this.requestVClaim('get', 'Monitoring/Klaim/Tanggal/' + tglPulang + '/JnsPelayanan/' + jnsPelayanan + '/Status/' + statusKlaim);
  }
  historyPelayanan(noKartu, tglAwal, tglAkhir) {
    return this.requestVClaim('get', 'monitoring/HistoriPelayanan/NoKartu/' + noKartu + '/tglAwal/' + tglAwal + '/tglAkhir/' + tglAkhir);
  }
  dataKlaimJasaRaharja(jnsPelayanan, tglMulai, tglAkhir) {
    return this.requestVClaim('get', 'monitoring/JasaRaharja/JnsPelayanan/' + jnsPelayanan + '/tglMulai/' + tglMulai + '/tglAkhir/' + tglAkhir);
  }
}