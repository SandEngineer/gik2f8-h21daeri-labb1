/* Tar emot list entries från BookList.js
Lägger mottagna id i elementens id
Triggers för mouseover */
const BookListItem = (book) => {
    let html = `<li class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-blue-500 last:border-b-0 border-b border-slate-300 cursor-pointer"
                    id="${book.id}"
                    onmouseover="tooltipShow(this)"
                    onmouseout="tooltipHide()">
                    ${book.author} - ${book.title}
                </li>`;

    return html;
};