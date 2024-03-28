const arguments = process.argv.slice(2);

function CircleArea(r) {
  const pi = 3.14159265359;
  const area = pi * Math.pow(r, 2);

  console.log(
    `Yarıçapı ${r} olan dairenin alanı: ${parseFloat(area).toFixed(2)}`
  );
}

CircleArea(arguments[0]);
