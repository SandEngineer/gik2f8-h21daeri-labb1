/* Källa */
const url = 'https://gik2f8-labs.herokuapp.com/books';

/* Hämtar hela listan från url */
async function getAll() {
    const result = await fetch(url)
        .then((result) => result.json())
        .catch((e) => e);

    return result;
}

/* Hämtar specific bok utefter id från listan */
async function getOne(id) {
    const result = await fetch(url+"/"+id)
        .then((result) => result.json())

    return result;
}