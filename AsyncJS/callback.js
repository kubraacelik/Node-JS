// console.log("1. Görev");
// console.log("2. Görev");
// console.log("3. Görev");

//! 1-2-3
// const func1 = () => {
//   console.log("Func1 completed");
//   func2();
// };

// const func2 = () => {
//   console.log("Func2 completed");
//   func3();
// };

// const func3 = () => {
//   console.log("Func3 completed");
// };

// func1();

//! 1-3-2
// const func1 = () => {
//   console.log("Func1 completed");
//   func3();
// };

// const func2 = () => {
//   console.log("Func2 completed");
// };

// const func3 = () => {
//   console.log("Func3 completed");
//   func2();
// };

// func1();

//! 1-3 5sn sonra 2
// let x = 5;
// console.log("1. gelen veri : ", x);

// setTimeout(() => {
//   x += 5;
//   console.log("2. gelen veri : ", x);
// }, 5000);

// x += 5;
// console.log("3. gelen veri : ", x);

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

//kitap ekledikten sonra listeleme de çalışsın(callback sayesinde)
const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

//callback = listBooks oluyor
addBook({ name: "Book 4", author: "Author 4" }, listBooks);
//listBooks();
