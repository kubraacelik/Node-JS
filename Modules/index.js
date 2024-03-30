//! FS MODÜLÜNÜ KULLANMAK İÇİN
const fs = require("fs");

//! DOSYA OKUMAK İÇİN
//? err=hata mesajı, data=verdiğimiz data
// fs.readFile("password.txt", "utf8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("Dosya Okundu");
// });

//! DOSYA YAZMAK İÇİN
//? uzantısı txt
// fs.writeFile("example.txt", "KODLUYORUZZZ", "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Başarılı Bir Şekilde Dosya Oluşturuldu");
// });

//? uzantısı json
fs.writeFile("example.json", '{"name" : "Kübra", "age" : 22}', "utf8", (err) => {
  if (err) console.log(err);
  console.log("Dosya Başarılı Bir Şekilde Oluşturuldu");
});

//! VERİ EKLEMEK İÇİN