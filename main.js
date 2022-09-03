class Book {
    constructor(title, author, numOfPages, readStatus) {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.readStatus = readStatus;
    }
}

const addBookToLibraryBtn = document.getElementById("submit-btn"); 
const addBookForm = document.getElementById("add-book-form");
const addBookFormItems = document.querySelectorAll("form-item");
const btn = document.getElementById("add-book-button");
const bookSection = document.getElementById("books");
let myLibrary = [];

//displays form 
btn.addEventListener('click', () => {
    addBookForm.classList.add("visible");
 
    const formTitle = document.getElementById("form-title");
    const checkbox = document.getElementById("read-status")
    
    //hides form when the window is clicked
    window.onclick = (event) => {
        if (event.target.id != "add-book-button" && event.target != addBookForm && event.target != formTitle && event.target != checkbox
         && event.target.id != "submit-btn" && event.target.id != "title" && event.target.id != "author" && event.target.id != "pages" 
         && event.target.id != "read-status-label") {
            addBookForm.classList.remove("visible");
        }
    }
})

addBookForm.addEventListener('submit', () => {
    let title = addBookForm.elements['title'];
    let author = addBookForm.elements['author'];
    let numOfPages = addBookForm.elements['pages'];
    let readStatus = addBookForm.elements['read-status'];
    let newBook = new Book(title.value, author.value, numOfPages.value, readStatus.checked);
    addBookToLibrary(newBook);
    addBookForm.classList.remove("visible");
})

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateLibraryDisplay();
}

function updateLibraryDisplay() {

    //targets newly added book
    let newBook = myLibrary[myLibrary.length - 1];

    //makes a new book card based on the info on the book form
    let bookToBeAdded = document.createElement("div");
    bookToBeAdded.classList.add("book");
    bookSection.appendChild(bookToBeAdded);

    let newBookTitle = document.createElement("p");
    newBookTitle.innerHTML = newBook.title;
    bookToBeAdded.appendChild(newBookTitle);

    let newBookAuthor = document.createElement("p");
    newBookAuthor.innerHTML = newBook.author;
    bookToBeAdded.appendChild(newBookAuthor);

    let newBookPages = document.createElement("p");
    newBookPages.innerHTML = newBook.numOfPages;
    bookToBeAdded.appendChild(newBookPages);

    readStatusBtn = document.createElement("button");
    readStatusBtn.classList.add("read-btn");

    if (newBook.readStatus === true) {
        readStatusBtn.classList.add("read");
        readStatusBtn.innerHTML = "read";
    } else {
        readStatusBtn.classList.remove("read");
        readStatusBtn.innerHTML = "not read yet";
    }

    bookToBeAdded.appendChild(readStatusBtn);

    changeReadStatus(readStatusBtn, newBook);

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = "remove";
    bookToBeAdded.appendChild(removeBtn);

    removeBook(removeBtn, newBook.title, newBook.author);
}

function changeReadStatus(btn, newBook) {

    //changes color for 'read' button depending on whether a book is read
    btn.addEventListener('click', () => {
        if (btn.classList.contains("read")) {
            btn.innerHTML = "not read yet";
            btn.classList.remove("read");
            newBook.readStatus = false;
        } else {
            btn.innerHTML = "read";
            btn.classList.add("read");
            newBook.readStatus = true;
        }
    })
}

function removeBook(btn, title, author) {

    //removes book from library and html page
    btn.addEventListener('click', () => {
        let index = 0;
        myLibrary.forEach((book) => {
            if (book.title === title && book.author === author) {
                myLibrary.splice(index, 1);
            }
            index++;
        })
        let bookToBeRemoved = btn.parentElement;
        bookToBeRemoved.remove();
    })
}




