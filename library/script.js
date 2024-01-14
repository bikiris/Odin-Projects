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
  const b1 = document.createElement("button");
  b1.className = "edit";
  b1.innerHTML = "Edit";
  actions.appendChild(b1);
  const b2 = document.createElement("button")
  b2.className = "delete";
  b2.innerHTML = "Delete";
  actions.appendChild(b2);
  card.appendChild(actions);

  document.querySelector(".main-content").appendChild(card);
}

function updateLibrary(){
    document.querySelector(".main-content").innerHTML = "";
    myLibrary.forEach((book) => {
        addBookToLibrary(book);
    })
}

//new book page toggle
const addNewBook = document.querySelector(".add-book");
const form = document.querySelector(".form");
const mainContent = document.querySelector(".main-content");
addNewBook.addEventListener("click", () => {
  form.classList.toggle("hidden");
  mainContent.classList.toggle("hidden");
});

//submit new book request
const submitForm = document.querySelector(".form");
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const info = event.target;
  const newBook = Book(info[0].value, info[1].value, info[2].value);
  myLibrary.push(newBook);
  updateLibrary();
});