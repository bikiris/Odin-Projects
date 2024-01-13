const addNewBook = document.querySelector('.add-book');
const form = document.querySelector('.form');
const mainContent = document.querySelector('.main-content')
addNewBook.addEventListener('click', () => {
    form.classList.toggle('hidden');
    mainContent.classList.toggle('hidden');
});