import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';

export default function ShowAllBookPerAuthor(props) {
    const books = useFragment(
        BookQuery,
        props.books,
    );
    if (books == null) {
        return null;
    }

    const filteredBooks = books.filter(book => 
        book.author.id === props.authorID
    );

    return (
        <table class="table table-bordered table-striped">
            <th>
                Name
            </th>
            <th>
                Description
            </th>
            <tbody>
                {filteredBooks.length > 0 
                    ? filteredBooks.map((book) => 
                        <tr>
                            <td>{book.name}</td>
                            <td>{book.desc}</td>
                        </tr>  
                    ) 
                    : <p>No Book found</p>
                }
            </tbody>
        </table>
    );
}

const BookQuery = graphql`
    fragment ShowAllBookPerAuthor_book on Book
    @relay(plural: true) {
        name
        desc
        author {
          id
        }
    }
  `;