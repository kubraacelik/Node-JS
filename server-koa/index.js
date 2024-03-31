//koa paketini require ettik
const Koa = require("koa");

//Koa function'u app değişkenine atıyoruz
const app = new Koa();

app.use((ctx) => {
  if (ctx.path === "/") {
    ctx.status = 200;
    ctx.type = "html";
    ctx.body = "<h1>INDEX SAYFASI</h1>";
  } 
  else if (ctx.path === "/about") {
    ctx.status = 200;
    ctx.type = "html";
    ctx.body = "<h1>ABOUT SAYFASI</h1>";
  }
  else if (ctx.path === "/contact") {
    ctx.status = 200;
    ctx.type = "html";
    ctx.body = "<h1>CONTACT SAYFASI</h1>";
  }
  else{
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port}'de başlatıldı`);
});
