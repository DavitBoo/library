const addNewBtn = document.getElementById('add-new-btn')
const addNewForm = document.querySelector('.form-container')
const addNew = document.getElementById('add-new')
const overlay = document.querySelector('.overlay')
const gridContainer = document.querySelector('.grid-container')

//form values
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readYes = document.getElementById('yes')
const readNo = document.getElementById('no')

let deleteBook = document.querySelectorAll('.delete-book')



let myLibrary = [
    {
        title: 'Creatividad y plenitud de Vida',
        author: 'Antonio Blay Fontcuberta',
        pages: 301,
        read: false
    },
    {
        title: 'La muerte en Venecia',
        author: 'Thomas Man',
        pages: 142,
        read: false
    },
    {
        title: 'Creatividad y plenitud de Vida',
        author: 'Antonio Blay Fontcuberta',
        pages: 301,
        read: false
    },
    {
        title: 'La muerte en Venecia',
        author: 'Thomas Man',
        pages: 142,
        read: false
    },
];


function searchInMyLibrary(){
    let bookContainerCreator = myLibrary.reduce((acc, book, i) => {
        acc += `<div class="book-container">
            <svg class="delete-book" data-id="${i}" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
            </svg>
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Already read it' : 'Not read it yet'}</p>
        </div>`;
        return acc;
    }, '');
    return bookContainerCreator
}


function updateLibrary(){
    gridContainer.innerHTML = searchInMyLibrary();

    deleteBook = document.querySelectorAll('.delete-book')
    deleteBook.forEach(element => {
        element.addEventListener('click', () => {
            removeLibrary(element.dataset.id)
        })
    })   
}


function removeLibrary(index){
    console.log(myLibrary[index])
    myLibrary.splice(index, 1); 
    gridContainer.innerHTML = searchInMyLibrary();
    updateLibrary();
}

function addBookToLibrary() {
    let titleValue = titleInput.value
    let authorValue = authorInput.value
    let pagesValue = pagesInput.value
    let readValue = readYes.value ? true : false
    
    console.log(titleValue, authorValue, pagesValue, readValue)
    let newBook = new Book(titleValue, authorValue, pagesValue, readValue)
    console.log(newBook)
    myLibrary.push(newBook)
    updateLibrary();
  }

window.addEventListener('DOMContentLoaded', () => {
    updateLibrary();
});


addNewBtn.addEventListener('click', (e) => {
    addNewForm.classList.add('hide')
    overlay.classList.add('hide')

    addBookToLibrary();

    e.preventDefault();
})


addNew.addEventListener('click', () => {
    addNewForm.classList.remove('hide')
    overlay.classList.remove('hide')
})


overlay.addEventListener('click', () => {
    if(!overlay.classList.contains('hide')){
        addNewForm.classList.add('hide')
        overlay.classList.add('hide')
    }
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
       return `The ${title} by ${author}, ${pages} pages, ${read ? `already read` : `not read yet`}`
    }
}







