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
    const search = document.getElementById('search');
    
    existingElement && search.removeChild(existingElement);
    bookList.length > 0 && searchField.value && search.insertAdjacentHTML('beforeend', BookList(bookList))
}

/* Visar inforuta med relevant info vid mouseover av listelement
Info hämtas via elementets id med getOne*/
function tooltipShow(elem) {
    getOne(elem.id).then(e => {
        const mc = document.getElementById('mainContainer');
        console.log (e)
        mc.insertAdjacentHTML('beforeend', Tooltip(e))
    })
}

/* Döljer inforuta när musen lämnar listelement */
function tooltipHide() {
    const mc = document.getElementById('mainContainer');
    const tooltip = document.querySelector('.tooltip');

    mc.removeChild(tooltip)
}