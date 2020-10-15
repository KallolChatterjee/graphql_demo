const AuthorDB = [];
const BookDB = [];

class Book {
    constructor(id, {name, desc, author}) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.author = author;
    }
}

class Author {
    constructor(id, {name, email, books}) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.books = books;
    }
}

exports.AuthorDB = AuthorDB;
exports.BookDB = BookDB;
exports.Author = Author;
exports.Book = Book;