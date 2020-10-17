import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import CreateNewAuthor from './CreateNewAuthor.react';
import ShowAllBooksPerAuthorContainer from './ShowAllBooksPerAuthorContainer.react';

export default function SideColumn(props) {
    const onHideClick = () => {
        props.toggleSideColumn();
    };

    let title = '';
    if(props.sideColumnType === 'CREATE_NEW') {
        title = 'Create New Author';
    } else if(props.sideColumnType === 'SHOW_AUTHOR_BOOK') {
        title = 'Books Written By Current Author'; 
    } else if(props.sideColumnType === 'UPDATE_AUTHOR') {
        title = 'Update Author Details'; 
    } else if(props.sideColumnType === 'SHOW_AUTHOR') {
        title = 'Show Author For This Current Book'; 
    } else if(props.sideColumnType === 'UPDATE_BOOK') {
        title = 'Update Book Details'; 
    }
    
    let body = <div></div>;
    if(props.sideColumnType === 'CREATE_NEW') {
        body = <CreateNewAuthor sideColumnType={props.sideColumnType}/>;
    } else if(props.sideColumnType === 'SHOW_AUTHOR_BOOK') {
        body = <ShowAllBooksPerAuthorContainer authorID={props.authorID}/>;; 
    } else if(props.sideColumnType === 'UPDATE_AUTHOR') {
        body = <CreateNewAuthor sideColumnType={props.sideColumnType}/>; 
    } else if(props.sideColumnType === 'SHOW_AUTHOR') {
        body = <CreateNewAuthor sideColumnType={props.sideColumnType}/>;
    } else if(props.sideColumnType === 'UPDATE_AUTHOR') {
        body = 'Update Book'; 
    }

    return (
        <div className="App">
            <header>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a class="navbar-brand" href="#">Additional Detials</a>
                </nav>
            </header>
            <body>
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between">
                        <div>{title}</div>
                        <div>
                            <button type="button" class="btn btn-default" onClick={onHideClick}>
                                Hide
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    {body}              
                </div>
            </div>
            </body>
        </div>
    )
}