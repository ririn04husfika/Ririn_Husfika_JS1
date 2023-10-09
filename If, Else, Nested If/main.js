//If, Else, dan Nested If
var harga = 83;

if (harga >= 95) {
  console.log("Harga Tinggi");
} else if (harga >= 80) {
  console.log("Harga Sedang");
} else {
  console.log("Harga Rendah");
  
  if (harga < 60) {
    console.log("Anda Sudah menghemat uang!");
  }
}
