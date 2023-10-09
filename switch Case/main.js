//Switch Case
var hari = "Minggu";

switch (hari) {
  case "Senin":
    console.log("Saatnya Kerja Libur telah Usai.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Waktunya Untuk Istirahat.");
    break;
  default:
    console.log("Hari ini hari biasa.");
}