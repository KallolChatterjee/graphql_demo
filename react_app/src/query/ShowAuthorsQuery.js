import graphql from 'babel-plugin-relay/macro';

const ShowAuthorsQuery = graphql`
  query ShowAuthorsQuery {
    showAllAuthor {
      ...AuthorsList_author
    }
  }
`;

exports.ShowAuthorsQuery = ShowAuthorsQuery;