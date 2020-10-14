class Author {
    constructor(id, {name, email}) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

const AuthorDB = [];

const serverCalls = {
    showAllAuthor: () => {
        let authors = [];
        for (const author in AuthorDB) {
            authors.push(new Author(
                author, 
                AuthorDB[author],
            ));
        }
        return authors;
    },
    getAuthor: ({id}) => {
        if (!AuthorDB[id]) {
            throw new Error('No Author found with id# ' + id);
        }
        return new Author(id, AuthorDB[id]);
    },
    createAuthor: ({input}) => {
        var id = require('crypto').randomBytes(10).toString('hex');
        AuthorDB[id] = input;
        return new Author(id, AuthorDB[id]);
    },
    updateAuthor: ({id, input}) => {
        if (!AuthorDB[id]) {
            throw new Error('No Author found with id# ' + id);
        }
        AuthorDB[id] = input;
        return new Author(id, AuthorDB[id]);
    },
};

exports.serverCalls = serverCalls;