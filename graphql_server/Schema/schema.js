const {buildSchema} = require('graphql');

const schema = buildSchema(`
    input AuthorInput {
        name: String
        email: String
    }

    type Author {
        id: ID!
        name: String
        email: String
    }

    type Query {
        showAllAuthor: [Author!]
        getAuthor(id: ID!): Author
    }

    type Mutation {
        createAuthor(input: AuthorInput): Author
        updateAuthor(id: ID!, input: AuthorInput): Author
    }
`);

exports.schema = schema;