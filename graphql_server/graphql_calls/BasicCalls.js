const {Author, AuthorDB, Book, BookDB} = require("./setup");

const showAllBooksByAuthor = ({authorID}) => {
    let books = [];
    for (const book in BookDB) {
        if (book.authorID === authorID) {
            books.push(new Book(
                book,
                BookDB[book],
            ));
        }
    }
    return books;
};

const getAuthor = ({id}) => {
    if (!AuthorDB[id]) {
        throw new Error('No Author found with id# ' + id);
    }
    return new Author(
        id, 
        {
            ...AuthorDB[id],
            books: showAllBooksByAuthor(id),
        },
    );
};

exports.showAllBooksByAuthor = showAllBooksByAuthor;
exports.getAuthor = getAuthor;