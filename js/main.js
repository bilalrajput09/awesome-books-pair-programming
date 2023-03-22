/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */

const bookList = document.getElementsByClassName('book_list')[0];
const addBtn = document.getElementsByClassName('add-btn')[0];
const listContainer = document.querySelector('.list_container');
const addNewBtn = document.querySelector('.add_new_btn');
const listBtn = document.querySelector('.list_btn');
const contactBtn = document.querySelector('.contact_btn');
const mainForm = document.querySelector('.form');
const contactPage = document.querySelector('.contact');

listBtn.addEventListener('click', () => {
  mainForm.classList.add('hidden');
  listContainer.classList.remove('hidden');
  contactPage.classList.add('hidden');
});

contactBtn.addEventListener('click', () => {
  mainForm.classList.add('hidden');
  listContainer.classList.add('hidden');
  contactPage.classList.remove('hidden');
});

addNewBtn.addEventListener('click', () => {
  mainForm.classList.remove('hidden');
  listContainer.classList.add('hidden');
  contactPage.classList.add('hidden');
});

class BooksStore {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let books = [];
/* eslint-disable no-unused-vars */
class DisplayBooks {
  static checkLocalStorage() {
    if (localStorage.getItem('Books') == null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('Books'));
    }
    return books;
  }

  static display() {
    const books = DisplayBooks.checkLocalStorage();
    let display = '';
    books.forEach((sec, i) => {
      display += `
      <div class="allbooks">
        <div class= "paragraph">
        <p>"${sec.title}"</p>
        <p> by</p>
        <p> ${sec.author}</p>
        </div>
        <button class = "remove" onclick = "DisplayBooks.remove(${i})">Remove</button>
      </div>
    `;
    });
    bookList.innerHTML = display;
  }

  static addBooks = (title, author) => {
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    if (bookTitle !== '' && bookAuthor !== '') {
      const obj = new BooksStore(bookTitle, bookAuthor);
      const books = DisplayBooks.checkLocalStorage();

      books.push(obj);
      localStorage.setItem('Books', JSON.stringify(books));
    }
  };

  static remove = (id) => {
    const BookIndex = books.findIndex((item, i) => id === i);
    books.splice(BookIndex, 1);
    localStorage.setItem('Books', JSON.stringify(books));
    DisplayBooks.display();
  };
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  DisplayBooks.addBooks(title, author);
  DisplayBooks.display();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

// window.addEventListener('DOMContentLoaded', () => {
//   DisplayBooks.display();
// });
