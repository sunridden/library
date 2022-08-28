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
const btn = document.getElementById("add-book-button");

let myLibrary = [];

addBookForm.addEventListener('submit', () => {
    let title = addBookForm.elements['title'];
    let author = addBookForm.elements['author'];
    let numOfPages = addBookForm.elements['pages'];
    let readStatus = addBookForm.elements['read-statis'];
    let newBook = new Book(title.value, author.value, numOfPages.value, readStatus.value);
    addBookToLibrary(newBook);
})

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateLibraryDisplay();
}

const bookSection = document.getElementById("books");
function updateLibraryDisplay() {

    //targets newly added book
    let newBook = myLibrary[myLibrary.length - 1];

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

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = "remove";
    bookToBeAdded.appendChild(removeBtn);
}



