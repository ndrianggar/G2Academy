
// slide 15
var myProfile = {
    nama: "Hendri",
    kota: "Jakarta",
    umur: 25,
    tinggi: 179.5,
    mobil: ["BMW", "Ferrari", "Toyota"]
};

// tambahan slide 16
myProfile.kota = "Surabaya";
myProfile.umur = 24;
myProfile.mobil[0] = "VW";

document.getElementById("nama").innerHTML = myProfile.nama; // hati2 pada getElementById
document.getElementById("kota-asal").innerHTML = myProfile.kota;
document.getElementById("usia").innerHTML = myProfile.umur;
document.getElementById("tinggi-badan").innerHTML = myProfile.tinggi;
document.getElementById("merek-mobil").innerHTML = myProfile.mobil.join("/");