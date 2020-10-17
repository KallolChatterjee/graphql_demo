import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Book from './Book.react';

export default function BooksList(props) {
    const books = useFragment(
        BookQuery,
        props.books,
    );

    const OnCreateNewClick = () => {
        props.toggleSideColumn();
        props.setsideColumnType('CREATE_NEW_BOOK');
    };

    return (
        <div className="App">
          <body>
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                        <div>Books</div>
                        <div>
                            <button type="button" class="btn btn-default" onClick={OnCreateNewClick}>
                                Create New
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-striped">
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Author
                        </th>
                        <th>
                            Actions
                        </th>
                        <tbody>
                            {books.length > 0 
                                ? books.map((book) => 
                                    <Book 
                                        book={book}
                                        toggleSideColumn= {props.toggleSideColumn}
                                        setsideColumnType={props.setsideColumnType}
                                    />) 
                                : <p>No Book found</p>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
          </body>
        </div>
      );
}

const BookQuery = graphql`
    fragment BooksList_book on Book
    @relay(plural: true) {
      id
      ...Book_book
    }
  `;