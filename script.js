const addNewBtn = document.getElementById('add-new-btn')
const addNewForm = document.querySelector('.form-container')
const addNew = document.getElementById('add-new')
const overlay = document.querySelector('.overlay')
const gridContainer = document.querySelector('.grid-container')
const closeBtn = document.getElementById('close-btn')

//form values
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const imgUrlInput = document.getElementById('image-url')
const readYes = document.getElementById('yes')
const readNo = document.getElementById('no')

let deleteBook = document.querySelectorAll('.delete-book')
let changeIfRead = document.querySelectorAll('.icon-read')


let myLibrary = [
    {
        title: 'Creatividad y plenitud de Vida',
        author: 'Antonio Blay Fontcuberta',
        pages: 301,
        read: false,
        image: 'https://pictures.abebooks.com/isbn/9788470822773-es.jpg'
    },
    {
        title: 'La muerte en Venecia',
        author: 'Thomas Man',
        pages: 142,
        read: false,
        image: 'https://www.cicutadry.es/wp-content/uploads/2013/09/026.La-muerte-en-venecia.jpg'
    },
    {
        title: 'El poder de los 5 segundo',
        author: 'Mel Robbins',
        pages: 257,
        read: false,
        image: 'https://pictures.abebooks.com/isbn/9788448024185-es.jpg'
    },
    {
        title: 'El guardian entre el centeneno',
        author: 'J.D. Salinger',
        pages: 279,
        read: true,
        image: 'https://pictures.abebooks.com/inventory/30305197709.jpg'
    },
];


function searchInMyLibrary(){
    let bookContainerCreator = myLibrary.reduce((acc, book, i) => {
        acc += `<div class="book-container">
            <svg class="delete-book" data-id="${i}" style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
            </svg>
            <img class="book-image" src="${book.image}" alt="">
            <h2 class="title">${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? `Already read it <img data-read="${i}" class="icon-read already-read" src="svg/check-bold.svg"></img>` : `not read it yet <img data-read="${i}" class="icon-read not-yet" src="svg/book-open-variant.svg"></img>`} </p>
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

    changeIfRead = document.querySelectorAll('.icon-read')
    changeIfRead.forEach(element => {
        element.addEventListener('click', () => {
            changeReadState(element.dataset.read);
        })
    });

}


function removeLibrary(index){
    console.log(myLibrary[index])
    myLibrary.splice(index, 1); 
    gridContainer.innerHTML = searchInMyLibrary();
    updateLibrary();
}

function changeReadState(index){
    let readState = myLibrary[index].read
    myLibrary[index].read = readState ? false : true;
    updateLibrary();
}

function addBookToLibrary() {
    let titleValue = titleInput.value
    let authorValue = authorInput.value
    let pagesValue = pagesInput.value
    let imgUrlValue = imgUrlInput.value
    let readValue = readYes.checked ? true : false
    
    console.log(readYes)
    let newBook = new Book(titleValue, authorValue, pagesValue, imgUrlValue, readValue)
    console.log(newBook)
    myLibrary.push(newBook)
    updateLibrary();
  }

window.addEventListener('DOMContentLoaded', () => {
    updateLibrary();
});


addNewBtn.addEventListener('click', (e) => {
    
    if(validForm()){
        addNewForm.classList.add('hide')
        overlay.classList.add('hide')
        
        addBookToLibrary();
    }
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

closeBtn.addEventListener('click', () => {
    if(!overlay.classList.contains('hide')){
        addNewForm.classList.add('hide')
        overlay.classList.add('hide')
    }
})

class Book {
    constructor(title, author, pages, urlImage, read ){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.image = urlImage
    }
}




let titleLabel = document.querySelector('label[for=title]')
let authorLabel = document.querySelector('label[for=author]')
let imageUrlLabel = document.querySelector('label[for=image-url]')
let pagesLabel = document.querySelector('label[for=pages]')

console.log(titleLabel)

const validForm = () =>  {

    console.log(!titleInput.validity.valueMissing)
    if(titleInput.validity.valueMissing) {
        titleLabel.classList.add('error')
        titleInput.setCustomValidity("I am expecting an email address!");
        return false
    }

    titleLabel.classList.remove('error')
    if(authorInput.validity.valueMissing) {
        authorLabel.classList.add('error')
        return false
    }

    authorLabel.classList.remove('error')
    if(pagesInput.validity.valueMissing) 
    {   
        pagesLabel.classList.add('error')
        return false
    }

    pagesLabel.classList.remove('error')
   
    return true
}



