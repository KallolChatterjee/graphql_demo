import React from 'react';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

export default function Author(props) {
    const author = useFragment(
        AuthorQuery,
        props.author,
    );

    const showBooksClick = () => {
        props.toggleSideColumn();
        props.setsideColumnType('SHOW_AUTHOR_BOOK');
        props.setAuthorID(author.id);
    }

    const updateAuthorClick = () => {
        props.toggleSideColumn();
        props.setsideColumnType('UPDATE_AUTHOR');
    }

    return (
        <tr>
            <td>
                {author.name}
            </td>
            <td>
                {author.email}
            </td>
            <td>
                <button type="button" class="btn btn-default" onClick={showBooksClick}>
                    Show Books
                </button>
                <button type="button" class="btn btn-default" onClick={updateAuthorClick}>
                    Update
                </button>
            </td>
        </tr>  
      );
}

const AuthorQuery = graphql`
    fragment Author_author on Author {
      id
      name
      email
      books {
        id
        name
        desc
      }
    }
  `;