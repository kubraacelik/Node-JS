// Daire Modüler Dosyası
// Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
// module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
// require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.

const arguments = process.argv.slice(2);

function areaCircle(r) {
  const pi = 3.14159265359;
  const area = pi * Math.pow(r, 2);

  console.log(
    `Yarıçapı ${r} olan dairenin alanı: ${parseFloat(area).toFixed(2)}`
  );
}

function envCircle(r) {
  const pi = 3.14159265359;
  const environment = pi * r;

  console.log(
    `Yarıçapı ${r} olan dairenin çevresi : ${parseFloat(environment).toFixed(
      2
    )}`
  );
}

// areaCircle(arguments[0]);
// envCircle(arguments[0]);

module.exports = {
  areaCircle,
  envCircle,
};
