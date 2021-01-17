function hitungUmur(tahunIni, tahunLahir) {
    return tahunIni - tahunLahir;
}

function hitungMobil(arrayMobil) {
    return arrayMobil.length;
}

var myProfile = {
    nama: "Faris",
    kota: "Jakarta",
    lahir: 1994,
    tinggi: 179.5,
    mobil: ["BMW", "Ferrari", "Toyota"]
};

document.getElementById("nama").innerHTML = myProfile.nama;
document.getElementById("kota-asal").innerHTML = myProfile.kota;
document.getElementById("usia").innerHTML = hitungUmur(2019, myProfile.lahir);
document.getElementById("tinggi-badan").innerHTML = myProfile.tinggi;
document.getElementById("jumlah-mobil").innerHTML = hitungMobil(myProfile.mobil);


