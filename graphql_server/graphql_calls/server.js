const { createAuthor, updateAuthor, showAllAuthor } = require('./Author/Author');
const { createBook, updateBook, getBook, showAllBooks } = require('./Book/Book');
const { getAuthor, showAllBooksByAuthor } = require("./BasicCalls");

const serverCalls = {
    showAllAuthor,
    getAuthor,
    createAuthor,
    updateAuthor,
    createBook,
    updateBook,
    getBook,
    showAllBooks,
    showAllBooksByAuthor,
};
 
exports.serverCalls = serverCalls;