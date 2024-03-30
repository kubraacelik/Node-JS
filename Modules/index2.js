//! FS MODÜLÜNÜ KULLANMAK İÇİN
const fs = require("fs");

//! DOSYA OKUMAK İÇİN
//? err=hata mesajı, data=verdiğimiz data
// fs.readFile("password.txt", "utf8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
//   console.log("Dosya Okundu");
// });

//! DOSYA OLUŞTURMAK İÇİN
//? uzantısı txt
// fs.writeFile("example.txt", "KODLUYORUZZZ", "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Başarılı Bir Şekilde Dosya Oluşturuldu");
// });

//? uzantısı json
// fs.writeFile("example.json", '{"name" : "Kübra", "age" : 22}', "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Dosya Başarılı Bir Şekilde Oluşturuldu");
// });

//! VERİ EKLEMEK İÇİN
// fs.appendFile("example.txt", "\nKODLUYORUZZ 222", "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Veri Ekleme Tamamlandı");
// });

//! DOSYA SİLMEK İÇİN
// fs.unlink('example.json',(err)=>{
//   if(err) console.log(err);
//   console.log("Dosya Silme İşlemi Tamamlandı");
// })

//! KLASÖRLER OLUŞTURMAK İÇİN
// fs.mkdir("uploads/img",{recursive:true},(err)=>{
//   if(err) console.log(err);
//   console.log("Klasörler Başarıyla Oluşturuldu.");
// })

//! KLASÖRLER SİLMEK İÇİN
fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Klasörler Başarıyla Silindi");
});
