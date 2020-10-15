const {Author, AuthorDB} = require("../setup");
const {showAllBooksByAuthor} = require("../BasicCalls");

const showAllAuthor = () => {
    let authors = [];
    for (const author in AuthorDB) {
        authors.push(new Author(
            author, 
            {
                ...AuthorDB[author],
                books: showAllBooksByAuthor(author),
            },
        ));
    }
    return authors;
};

const createAuthor = ({input}) => {
    var id = require('crypto').randomBytes(10).toString('hex');
    AuthorDB[id] = {
        ...input,
        books: [],
    };
    return new Author(id, AuthorDB[id]);
};

const updateAuthor = ({id, input}) => {
    const currentData = AuthorDB[id];
    if (!currentData) {
        throw new Error('No Author found with id# ' + id);
    }
    AuthorDB[id] = {
        ...input,
        books: showAllBooksByAuthor(id),
    };
    return new Author(id, AuthorDB[id]);
};

exports.createAuthor = createAuthor;
exports.updateAuthor = updateAuthor;
exports.showAllAuthor = showAllAuthor;
exports.AuthorDB = AuthorDB;