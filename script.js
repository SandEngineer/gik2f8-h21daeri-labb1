/* Listinnehåll */
let bookList = [];

/* Laddar bok-api:n vid laddning av sidan */
window.addEventListener("load", () => {
    getAll().then(apiBooks => (bookList = apiBooks));
});

/* Hämta sökfältstermer */
const searchField = document.getElementById('searchField');

/* Tar emot sökterm
Skapar en lista filtrerad efter sökterm
Returnerar till renderBookList */
searchField.addEventListener("keyup", (input) => 
    renderBookList(
        bookList.filter(({ title, author }) => {
            const searchTerm = input.target.value.toLowerCase();
            return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0
        })
));

/* Element i html-listan visas/döljs beroende på innehåll */
function renderBookList(bookList) {
    BookList(bookList);

    const existingElement = document.querySelector('.book-list');
    const root = document.getElementById('root');
    
    existingElement && root.removeChild(existingElement);
    bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList))
}

console.log(bookList);

function renderTooltip() {


}