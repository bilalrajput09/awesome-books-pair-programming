/* eslint-disable no-unused-vars */

const bookList = document.getElementsByClassName('book_list')[0];
const addBtn = document.getElementsByClassName('btn_form')[0];
let books = [];

function checkLocalStorage() {
  if (localStorage.getItem('Books') == null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('Books'));
  }
}

function display() {
  checkLocalStorage();
  let display = '';
  books.forEach((sec, i) => {
    display += `
      <div>
        <p>${sec.Title}</p>
        <p>${sec.Author}</p>
        <button class = "remove" onclick = "remove(${i})">Remove</button>
      </div>
    `;
  });
  bookList.innerHTML = display;
}
const addBooks = (title, author) => {
  if (title !== '' && author !== '') {
    const obj = {
      Title: title,
      Author: author,
    };
    books.push(obj);
    localStorage.setItem('Books', JSON.stringify(books));
  }
};
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  addBooks(title, author);
  display();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

const remove = (id) => {
  const BookIndex = books.findIndex((item, i) => id === i);
  books.splice(BookIndex, 1);
  localStorage.setItem('Books', JSON.stringify(books));
  display();
};

window.addEventListener('DOMContentLoaded', () => {
  display();
});
