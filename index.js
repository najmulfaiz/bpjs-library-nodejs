import WSBpjs from "./src/Antrean/WSBpjs";

const antrean = new WSBpjs();

antrean.refPoli().then(function(response) {
  console.log(response);
});