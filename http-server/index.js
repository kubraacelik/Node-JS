// http modülünü çağırdık
const http = require("http");

// sunucuyu oluşturduk. callback olarak request ve response parametrelerini kullandık
const server = http.createServer((req, res) => {
  //localhost:3000'den sonraki kısmı bana getirir
  const url = req.url;

  if (url === "/") {
    //bu gönderim başarılı ise 200 status kodunu gönder ve yazdırmak istediğim verinin tipini de yazdırabilirim(altta html olduğu için böyle yazdık)
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>INDEX SAYFASI</h1>");
  } 
  else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>ABOUT SAYFASI</h1>");
  } 
  else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>CONTACT SAYFASI</h1>");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  // response döndü ve tamamlandı
  res.end();
});

// sunucu olarak kendi bilgisayarımızı kullanacağız.
//kendi bilgisayarımızda hangi portu kullanacağımızı yazacağımız listen metodunu yazacağız

//3000=bizim port sayımız
const port = 3000;

// ikincisi callback fonksiyonumuz
server.listen(port, () => {
  console.log(`Sunucu port ${port}'de başlatıldı`);
});
