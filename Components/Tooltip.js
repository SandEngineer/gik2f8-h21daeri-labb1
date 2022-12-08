
const Tooltip = (book) => {
    let html = `<div class="tooltip rounded-md border-2 border-slate-400 bg-slate-400 w-fit mx-auto text-slate-900"
                     id="bookDetail">
                    <p>${book.title}<br>
                    By ${book.author}</p>
                    <p>${book.coverImage}</p>
                    <p>Pages: ${book.pages}<br>
                    Released: ${book.releaseDate}</p>
                </div>`;

    return html;
};