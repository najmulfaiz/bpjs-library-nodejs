import WSBpjs from "./src/Antrean/WSBpjs";
import Sep from "./src/VClaim/Sep";

// const antrean = new WSBpjs();
// antrean.refPoli().then(function(response) {
//   console.log(response);
// });

const vc = new Sep();
vc.fingerprintList('2022-09-12').then(function(response) {
  console.log(response);
});
