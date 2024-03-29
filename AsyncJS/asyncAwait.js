function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınmaya çalışılıyor...");

    if (data) {
      resolve("Veriler alındı.");
    } else {
      reject("Veriler alınamadı.");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor...");

    if (receivedData) {
      resolve("Veriler düzenlendi.");
    } else {
      reject("Veriler düzenlenemedi.");
    }
  });
}

//! getData()'dan sonra cleanData() çalıştığı için 2. bir then kullandıl
// getData(true)
//   .then((result) => {
//     console.log(result);
//     return cleanData(false);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//! ASYNC AWAİT İLE YAPALIM
// async function processData() {
//   try {
//     const receivedData = await getData(true);
//     console.log(receivedData);
//     const cleanedData = await cleanData(false);
//     console.log(cleanedData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// processData();

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
    resolve(books);
    //reject("Bir Hata Oluştu");
  });
  return promise1;
};

async function showBooks() {
  try {
    await addBook({ name: "Book 4", author: "Author 4" }, listBooks);
    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBooks();
