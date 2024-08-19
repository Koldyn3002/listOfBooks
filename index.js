const searchInput = document.getElementById("search-input");
const booksList = document.getElementById("books-list");
const bookItems = booksList.getElementsByTagName("li");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  Array.from(bookItems).forEach(function (book) {
    const title = book.querySelector("h3").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
