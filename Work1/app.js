// Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
// Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek 
// alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

const arguments = process.argv.slice(2);

function CircleArea(r) {
  const pi = 3.14159265359;
  const area = pi * Math.pow(r, 2);

  console.log(
    `Yarıçapı ${r} olan dairenin alanı: ${parseFloat(area).toFixed(2)}`
  );
}

CircleArea(arguments[0]);
