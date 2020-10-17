import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Author from './Author.react';

export default function AuthorsList(props) {
    const authors = useFragment(
        AuthorQuery,
        props.authors,
    );

    const OnCreateNewClick = () => {
        props.toggleSideColumn();
        props.setsideColumnType('CREATE_NEW');
    };

    return (
        <div className="App">
          <header>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <a class="navbar-brand" href="#">Library</a>
            </nav>
          </header>
          <body>
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                        <div>Authors</div>
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
                            Email
                        </th>
                        <th>
                            Actions
                        </th>
                        <tbody>
                            {authors.length > 0 
                                ? authors.map((author) => 
                                    <Author 
                                        author={author}
                                        toggleSideColumn= {props.toggleSideColumn}
                                        setsideColumnType={props.setsideColumnType}
                                        setAuthorID={props.setAuthorID}
                                    />) 
                                : <p>No Author found</p>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
          </body>
        </div>
      );
}

const AuthorQuery = graphql`
    fragment AuthorsList_author on Author
    @relay(plural: true) {
      id
      ...Author_author
    }
  `;