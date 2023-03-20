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
    if (title != "" && author != "") {
        obj = {
            Title: title,
            Author: author,
        }
        books.push(obj);
        localStorage.setItem('Books', JSON.stringify(obj));
    }
}

function display() {
    let display = ``;
    books.forEach((sec, i) => {
        display += `
      <div>
        <p>${sec.Title}</p>
        <p>${sec.Author}</p>
        <button onclick = "remove(${i})">Remove</button>
      </div>
    `;

    });
    bookList.innerHTML = display;

}

const remove = (id) => {
    const bookIndex = books.findIndex((item, i) => {
        i === id;
    });
    books.splice(bookIndex, 1);
    localStorage.setItem('Books', JSON.stringify(obj));
    display();
}

function checkLocalStorage() {
    if (localStorage.getItem("Books") == null) {
        books = [];
    }
    else {
        books = JSON.parse(localStorage.getItem("Books"));
    }

}

checkLocalStorage();


