/*
Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız?
Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/

let blogs = [
  { name: "Blog 1", id: 1 },
  { name: "Blog 2", id: 2 },
  { name: "Blog 3", id: 3 },
];

const listBlogs = () => {
  blogs.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    blogs.push(newPost);
    resolve("Post Eklendi.");
    reject("Post Eklenemedi.");
  });
};

async function showBlogs() {
  try {
    await addPost({ name: "Blog 4", id: 4 });
    listBlogs();
  } catch (error) {
    console.log(error);
  }
}

showBlogs();
