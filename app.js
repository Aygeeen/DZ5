const array = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67]
const filterArray = array.filter((i) => i % 2 !== 0)
console.log(filterArray)

//---------------------------
function books(...AllBooks) {
    const booksWithU = []
    const otherBooks = []
    for (let i = 0; i < AllBooks.length; i++) {
        const book = AllBooks[i]
        if (book.includes('у') || book.includes('У')) {
            booksWithU.push(book)
        } else {
            otherBooks.push(book)
        }
    }
    console.log('Книги с буквой у -', booksWithU)
    console.log('Остальные книги', otherBooks)
}

books('Гарри поттер', 'Унесенные ветром', 'Сумерки', 'Властелин колец', 'Ромео и Джульетта', 'Алиса в стране чудес', 'любовный роман')