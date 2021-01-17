/* Buat variabel (objek) dari profil Anda
Daftarkan semua barang Anda di tas ke dalam variabel
Buat fungsi untuk menghitung barang Anda
Tampilkan variabel ke HTML (juga jumlah barang dan daftar Anda)
Buat tombol untuk mengubah beberapa nilai,
Atur klik tombol untuk mengubah nilai HTML ke yang baru */

// var meProfil1 = {
//     name: "Hendri",
//     status: "Student Bootcamp G2 Academy",
//     kota: "Jakarta",
//     umur: 25,
//     tinggi: 179.5,
//     isiBag: ["Pensil", "Buku", "Penggaris", "Baju"],
//     asset: ["Ruko", "Apartemen", "Rumah"]
// };


// function hitungJumlahIsiBag(count) {
//     return count.length;
// }


// function hitungJumlahAsset(counts) {
//     return counts.length;
// }


// var meProfil2 = {
//     name: "Pak Hary",
//     status: "instruktur G2 Academy",
//     kota: "Bandung",
//     umur: 20,
//     tinggi: 900.5,
//     isiBag: ["Rulles", "Book", "Pena", "T-shirt"],
//     asset: ["Apt", "Rs", "Hotel", "Mosqoue"]
// };


// function hitungJumlahIsiBag2(count) {
//     return count.length;
// }


// function hitungJumlahAsset2(counts) {
//     return counts.length;
// }

var artikel1 = {
    gambar: "Jakarta",
    judul: "Belajar dari pengajar yang berpengalaman dan berdedikasi di bidangnya",
    isiartikel: "Dapatkan pengalaman belajar bersama instruktur senior yang penuh semangat dan dedikasi. Merekalah yang telah mendorong perusahaan-perusahaan teknologi saat ini berkembang dengan pesat. Instruktur kami memberikan pengalaman kelas yang sangat berbeda, dirancang secara khusus, serta terhubung dengan dunia nyata. Utamanya, mereka berkomitmen kepada anda sebagai seorang individu pembelajar."

};

var artikel2 = {
    gambar: "Jakarta.jpg",
    judul: "Belajar dari pengajar yang berpengalaman dan berdedikasi di bidangnya",
    isiartikel: "Dapatkan pengalaman belajar bersama instruktur senior yang penuh semangat dan dedikasi.Merekalah yang telah mendorong perusahaan - perusahaan teknologi saat ini berkembang dengan pesat.Instruktur kami memberikan pengalaman kelas yang sangat berbeda, dirancang secara khusus, serta terhubung dengan dunia nyata.Utamanya, mereka berkomitmen kepada anda sebagai seorang individu pembelajar."


};

var list = "<tr><td>" + meProfil1.isiBag.join("<td/> <br> </tr>") + "<td> <br></td>";
var list2 = "<tr><td>" + meProfil2.isiBag.join("<td/> <br> </tr>") + "<td> <br></td>";

// document.getElementById('nama').innerHTML = meProfil1.name;
// document.getElementById('status').innerHTML = meProfil1.status;
// document.getElementById('kota-asal').innerHTML = meProfil1.kota;
// document.getElementById('umur').innerHTML = meProfil1.umur;
// document.getElementById('tinggi-badan').innerHTML = meProfil1.tinggi;
// document.getElementById('total-isi-bag').innerHTML = hitungJumlahIsiBag(meProfil1.isiBag);
// document.getElementById('total-isi-asset').innerHTML = hitungJumlahAsset(meProfil1.asset);
// document.getElementById('isi-bag').innerHTML = list;


document.getElementById('judul').innerHTML = artikel1.judul;
document.getElementById('isiartikel').innerHTML = artikel1.isiartikel;


// document.getElementById('tRubah').onclick = function () {
//     document.getElementById('nama').innerHTML = meProfil2.name;
//     document.getElementById('status').innerHTML = meProfil2.status;
//     document.getElementById('kota-asal').innerHTML = meProfil2.kota;
//     document.getElementById('umur').innerHTML = meProfil2.umur;
//     document.getElementById('tinggi-badan').innerHTML = meProfil2.tinggi;
//     document.getElementById('total-isi-bag').innerHTML = hitungJumlahIsiBag2(meProfil2.isiBag);
//     document.getElementById('total-isi-asset').innerHTML = hitungJumlahAsset2(meProfil2.asset);
//     document.getElementById('isi-bag').innerHTML = list2;

// }


// document.getElementById('tBack').onclick = function () {
//     document.getElementById('nama').innerHTML = meProfil1.name;
//     document.getElementById('status').innerHTML = meProfil1.status;
//     document.getElementById('kota-asal').innerHTML = meProfil1.kota;
//     document.getElementById('umur').innerHTML = meProfil1.umur;
//     document.getElementById('tinggi-badan').innerHTML = meProfil1.tinggi;
//     document.getElementById('total-isi-bag').innerHTML = hitungJumlahIsiBag(meProfil1.isiBag);
//     document.getElementById('total-isi-asset').innerHTML = hitungJumlahAsset(meProfil1.asset);
//     document.getElementById('isi-bag').innerHTML = list;
// }

document.getElementById('tBack').ondblclick = function () {
    alert("pelan-pelan mas tekannya hanya sekali");

}


