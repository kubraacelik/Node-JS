//express paketini require ettik
const express = require("express");

//express function'u app değişkenine atıyoruz
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("INDEX SAYFASI");
});

app.get("/about", (req, res) => {
  res.status(200).send("ABOUT SAYFASI");
});

app.get("/contact", (req, res) => {
  res.status(200).send("CONTACT SAYFASI");
});

app.get("*", (req, res) => {
  res.status(404).send("404 SAYFA BULUNAMADI");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}'de başlatıldı`);
});
