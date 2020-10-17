import graphql from 'babel-plugin-relay/macro';

const ShowAllBooksQuery = graphql`
  query ShowAllBooksQuery {
    showAllBooks {
        ...BooksList_book
        ...ShowAllBookPerAuthor_book
    }
  }
`;

exports.ShowAllBooksQuery = ShowAllBooksQuery;