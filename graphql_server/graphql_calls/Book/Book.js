const {getAuthor} = require('../BasicCalls');
const {Book, BookDB} = require("../setup");

const showAllBooks = () => {
    let books = [];
    for (const book in BookDB) {
        books.push(new Book(
            book,
            BookDB[book],
        ));
    }
    return books;
};

const getBook = ({id}) => {
    if(!BookDB[id]) {
        throw new Error('No Book found with id# '+ id);
    }
    return new Book(id, BookDB[id]);
};

const createBook = ({input})  => {
    const authorID = input.authorID;
    const id = require('crypto').randomBytes(10).toString('hex');
    const author = getAuthor({id: authorID});
    if(!author) {
        throw new Error('No Author found with id# '+ authorID);
    }
    
    BookDB[id] = {
        name: input.name,
        desc: input.desc,
        author: author,
    };
    return new Book(id, BookDB[id]);
};

const updateBook = ({id, input}) => {
    if (!BookDB[id]) {
        throw new Error('No Book found with id# ' + id);
    }
    if(!getAuthor({id: input.authorID})) {
        throw new Error('No Author found with id# '+ input.authorID);
    }
    const author = getAuthor({id: input.authorID});
    BookDB[id] = {
        name: input.name,
        desc: input.desc,
        author: author,
    };
    return new Book(id, BookDB[id]);
};

exports.createBook = createBook;
exports.updateBook = updateBook;
exports.getBook = getBook;
exports.showAllBooks = showAllBooks;
exports.BookDB = BookDB;