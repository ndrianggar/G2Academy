
var artikel1 = {
    judul: "Belajar dari pengajar yang berpengalaman dan berdedikasi di bidangnya",
    isiartikel: "Dapatkan pengalaman belajar bersama instruktur senior yang penuh semangat dan dedikasi. Merekalah yang telah mendorong perusahaan-perusahaan teknologi saat ini berkembang dengan pesat. Instruktur kami memberikan pengalaman kelas yang sangat berbeda, dirancang secara khusus, serta terhubung dengan dunia nyata. Utamanya, mereka berkomitmen kepada anda sebagai seorang individu pembelajar."

};

var x = document.createElement("IMG");
x.setAttribute("src", "1.png");
x.setAttribute("width", "304");
x.setAttribute("height", "228");
x.setAttribute("alt", "The Pulpit Rock");




var artikel2 = {
    gambar: "1.png",
    judul: "Belajar dari pengajar yang berpengalaman dan berdedikasi di bidangnya",
    isiartikel: "Dapatkan pengalaman belajar bersama instruktur senior yang penuh semangat dan dedikasi.Merekalah yang telah mendorong perusahaan - perusahaan teknologi saat ini berkembang dengan pesat.Instruktur kami memberikan pengalaman kelas yang sangat berbeda, dirancang secara khusus, serta terhubung dengan dunia nyata.Utamanya, mereka berkomitmen kepada anda sebagai seorang individu pembelajar."


};


document.getElementById("gambar").appendChild(x);
document.getElementById("judul").innerHTML = artikel1.judul;
document.getElementById("isiartikel").innerHTML = artikel1.isiartikel;


document.getElementById('tRubah').onclick = function () {
    document.getElementById('judul').innerHTML = artikel2.judul;
    document.getElementById('isiartikel').innerHTML = artikel2.isiartikel;
}

