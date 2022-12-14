const addNewBtn = document.getElementById('add-new-btn')
const addNewForm = document.querySelector('.form-container')
const addNew = document.getElementById('add-new')

let myLibrary = [{
    title: 'Creatividad y plenitud de Vida',
    author: 'Antonio Blay Fontcuberta',
    pages: 301,
    read: false
}];


addNewBtn.addEventListener('click', (e) => {
    addNewForm.classList.add('hide')
    e.preventDefault();
})


addNew.addEventListener('click', () => {
    addNewForm.classList.remove('hide')
})

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

function searchInMyLibrary(){
    myLibrary.forEach(book => {
        return book.title;
    });
}

