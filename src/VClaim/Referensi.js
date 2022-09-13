import BpjsService from "../BpjsService";

export default class Referensi extends BpjsService {
  diagnosa(keyword) {
    return this.requestVClaim('get', 'referensi/diagnosa/' + keyword);
  }

  poli(keyword) {
    return this.requestVClaim('get', 'referensi/poli/' + keyword);
  }

  faskes(kd_faskes = null, jns_faskes = null) {
    return this.requestVClaim('get', 'referensi/faskes/' + kd_faskes + '/' + jns_faskes);
  }

  dokterDpjp(jnsPelayanan, tglPelayanan, spesialis) {
    return this.requestVClaim('get', 'referensi/dokter/pelayanan/' + jnsPelayanan + '/tglPelayanan/' + tglPelayanan + '/Spesialis/' + spesialis);
  }

  propinsi() {
    return this.requestVClaim('get', 'referensi/propinsi');
  }

  kabupaten(kdPropinsi) {
    return this.requestVClaim('get', 'referensi/kabupaten/propinsi/' + kdPropinsi);
  }

  kecamatan(kdKabupaten) {
    return this.requestVClaim('get', 'referensi/kecamatan/kabupaten/' + kdKabupaten);
  }

  procedure(keyword) {
    return this.requestVClaim('get', 'referensi/procedure/' + keyword);
  }

  kelasRawat() {
    return this.requestVClaim('get', 'referensi/kelasrawat');
  }

  dokter(keyword) {
    return this.requestVClaim('get', 'referensi/dokter/' + keyword);
  }

  spesialistik() {
    return this.requestVClaim('get', 'referensi/spesialistik');
  }

  ruangrawat() {
    return this.requestVClaim('get', 'referensi/ruangrawat');
  }

  carakeluar() {
    return this.get('referensi/carakeluar');
  }

  pascapulang() {
    return this.get('referensi/pascapulang');
  }

  diagnosaProgramPRB() {
    return this.get('referensi/diagnosaprb');
  }

  obatGenerikProgramPRB(keyword) {
    return this.get('referensi/obatprb/' + keyword);
  }
}