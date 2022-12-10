/* Anropas vid mouseover
Får info från getOne med relevant id från elementet */
const Tooltip = (book) => {
    let html = `<div class="tooltip flex flex-col items-center rounded-md border-2 border-slate-400 bg-slate-400 w-1/3 mx-auto text-slate-900"
                     id="bookDetail">
                    <p>${book.title}</p>
                    <p>By ${book.author}</p>
                    <img src="${book.coverImage}" width=200 height=300>
                    <p>Pages: ${book.pages}</p>
                    <p>Released: ${book.releaseDate}</p>
                </div>`;

    return html;
};