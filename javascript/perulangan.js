


var s = '';
for (var i = 0; i < 10; i++) {

    s += "!";

    /* kalau cetak disini akan lopiing 
perulangan.js:8 *
perulangan.js:8 **
perulangan.js:8 ***
perulangan.js:8 ****
perulangan.js:8 *****
perulangan.js:8 ******
perulangan.js:8 *******
perulangan.js:8 ********
perulangan.js:8 *********
perulangan.js:8 **********

    console.log(s);*/

}
console.log(s);

// hasiil **********

var d = '';


//ini baris / hati2 error Nan karena var definisi ga boleh sama dengan var for
for (var e = 10; e > 0; e--) {
    // kolom
    for (var f = 10; f > e; f--) {

        d += "*";


    }
    d += "\n";
}



console.log(d);



/*

  document.write(m = baris outer);
1
22
333
4444
55555
------------------
document.write(n = baris inside);
1
12
123
1234
12345

*/
// var d = 5;

for (var m = 1; m <= 5; m++) {
    for (var n = 5; n >= m; n--) {
        document.write(n / 5);
    }
    document.write("<br>")
}



