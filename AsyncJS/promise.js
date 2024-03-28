//! Promise'te olumlu durumlar için resolve, olumsuz durumlar için reject kullanılır
// const promise1 = new Promise((resolve, reject) => {
//resolve("Veriler Alındı");
//   reject("Bağlantı Hatası");
// });

//! promise1'deki resolve'un içindeki yazıyı getirdik (then kullandık)
//! promise1'deki reject'in içindeki yazıyı getirdik (catch kullandık)
// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const books = [
  { name: "Book 1", author: "Author 1" },
  { name: "Book 2", author: "Author 2" },
  { name: "Book 3", author: "Author 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    //resolve(books);
    reject("Bir Hata Oluştu");
  });
  return promise1;
};

//! Sonuç başarılı olursa addBook() ile birlikte listBooks()'ta çalışacak. Olumsuz olursa error mesajı verecek('Bir Hata Oluştu')
addBook({ name: "Book 4", author: "Author 4" })
  .then(() => {
    console.log("Yeni Liste");
    listBooks();
  })
  .catch((error) => {
    console.log(error);
  });
