// Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.

const fs = require("fs");

fs.writeFile(
  "employees.json",
  '{"name" : "Employee 1 Name", "salary" : 2000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("employees.json dosyası başarıyla oluşturuldu");
  }
);

fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
  console.log("employees.json dosyası başarıyla okundu");
});

fs.appendFile(
  "employees.json",
  '\n{"name":"Employee 2 Name", "salary":3000}',
  "utf8",
  (err) => {
    if (err) console.log(err);
    console.log("employees.json dosyasına başarıyla veri eklendi");
  }
);

// fs.unlink("employees.json", (err) => {
//   if (err) console.log(err);
//   console.log("employees.json dosyası başarıyla silindi");
// });
