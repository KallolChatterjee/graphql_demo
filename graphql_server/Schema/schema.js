const {buildSchema} = require('graphql');

const schema = buildSchema(`
    input AuthorInput {
        name: String
        email: String
    }

    input BookInput {
        name: String
        desc: String
        authorID: ID!
    }

    type Author {
        id: ID!
        name: String
        email: String
        books: [Book]
    }

    type Book {
        id: ID!
        name: String
        desc: String
        author: Author
    }

    type Query {
        showAllAuthor: [Author!]
        getAuthor(id: ID!): Author
        showAllBooks: [Book!]
        getBook(id: ID!): Book
    }

    type Mutation {
        createAuthor(input: AuthorInput): Author
        updateAuthor(id: ID!, input: AuthorInput): Author
        createBook(input: BookInput): Book
        updateBook(id: ID!, input: BookInput): Book
    }
`);

exports.schema = schema;