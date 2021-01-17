var nama = "Hendri";
var tahunLahir = 1994;
var umur = 2020 - tahunLahir;
var temp_celcius = 9 / 5 * umur + 32;


document.getElementById("name").innerHTML = nama;
document.getElementById("tahun").innerHTML = umur;
document.getElementById("temp_c").innerHTML = temp_celcius + "celcius";