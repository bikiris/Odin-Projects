const myLibrary = [];

function Book(title, author, pages) {
  return {
    title,
    author,
    pages,
  };
}

//add book card to HTML
function addBookToLibrary(book) {
  const card = document.createElement("div");
  card.className = "card";

  //book details
  const bookDetails = document.createElement("div");
  bookDetails.className = "book-detail";
  for (let key in book) {
    const temp = document.createElement("p");
    temp.className = `${book[key]}`;
    temp.innerHTML = book[key];
    bookDetails.appendChild(temp);
  }
  card.appendChild(bookDetails);

  //actions
  const actions = document.createElement("div");
  actions.className = "actions";

  //edit button
  const b1 = document.createElement("button");
  b1.className = "edit";
  b1.innerHTML = "Edit";
  
  //delete button
  const b2 = document.createElement("button");
  b2.className = "delete";
  b2.innerHTML = "Delete";

  //append to library
  actions.appendChild(b1);
  actions.appendChild(b2);
  card.appendChild(actions);
  b2.addEventListener("click", () => deleteBook(book,b2));
  document.querySelector(".main-content").appendChild(card);
}

function deleteBook(book,button){
  //remove from myLibrary
  let index = findBook(book);
  myLibrary.splice(index, 1);

  //remove from DOM
  const card = button.parentNode.parentNode;
  card.remove();
}

function findBook(book){
  myLibrary.forEach( (item,idx) => {
    if(item.title == book.title
        && item.author == book.author
        && item.pages == book.pages){
          return idx;
      }
  })
}

function updateLibrary(newBook){
  myLibrary.push(newBook);
  // updates library with every new book leads to performance issue
  // document.querySelector(".main-content").innerHTML = "";
  // myLibrary.forEach((book) => {
  //     addBookToLibrary(book);
  // })
  addBookToLibrary(newBook);
}

//new book page toggle
const addNewBook = document.querySelector(".add-book");
const form = document.querySelector(".form");
const mainContent = document.querySelector(".main-content");
addNewBook.addEventListener("click", () => toggleTab());

//submit new book request
const submitForm = document.querySelector(".form");
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const info = event.target;
  const newBook = Book(info[0].value, info[1].value, info[2].value);
  updateLibrary(newBook);
  toggleTab();
  submitForm.reset();
});

function toggleTab(){
  form.classList.toggle("hidden");
  mainContent.classList.toggle("hidden");
}

function init(){
  updateLibrary(Book("Title", "Author", "Pages"));
}
init();