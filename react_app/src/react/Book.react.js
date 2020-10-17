import React from 'react';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

export default function Author(props) {
    const book = useFragment(
        BookQuery,
        props.book,
    );

    const showAuthoClick = () => {
        props.toggleSideColumn();
        props.setsideColumnType('SHOW_AUTHOR');
    }

    const updateBookClick = () => {
        props.toggleSideColumn();
        props.setsideColumnType('UPDATE_BOOK');
    }

    return (
        <tr>
            <td>
                {book.name}
            </td>
            <td>
                {book.desc}
            </td>
            <td>
                {book.author.name}
            </td>
            <td>
                <button type="button" class="btn btn-default" onClick={showAuthoClick}>
                    Show Author
                </button>
                <button type="button" class="btn btn-default" onClick={updateBookClick}>
                    Update
                </button>
            </td>
        </tr>  
      );
}

const BookQuery = graphql`
    fragment Book_book on Book {
        name
        desc
        author {
          id
          name
          email
        }
    }
  `;