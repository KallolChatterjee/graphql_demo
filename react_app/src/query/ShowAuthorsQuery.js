import graphql from 'babel-plugin-relay/macro';

const ShowAuthorsQuery = graphql`
  query ShowAuthorsQuery {
    showAllAuthor {
      ...AuthorsList_author
      ...AuthorsDropDown_author
    }
  }
`;

exports.ShowAuthorsQuery = ShowAuthorsQuery;