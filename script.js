let myLibrary = [];

function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
       return `The ${title} by ${author}, ${pages} pages, ${read ? `already read` : `not read yet`}`
    }
}

function addBookToLibrary() {
    // do stuff here
  }