// Select elements

const bookList = document.getElementsByClassName("book_list")[0];
const addBtn = document.getElementsByClassName("btn_form")[0];

let books = [];

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  addBooks(title, author);
  display();
});




const addBooks = (title, author) => {
  if (title != "" && author != ""){
    obj = {
      Title: title,
      Author: author,
    }
    books.push(obj);
  }
}

function display(){
  let display = ``;
  books.forEach((sec, i) => {
    display += `
      <div>
        <p>${sec.Title}</p>
        <p>${sec.Author}</p>
        <button>Remove</button>
      </div>
    `;

  });
  bookList.innerHTML = display;
}

