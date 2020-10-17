import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ShowAuthorsContainer from './react/ShowAuthorsContainer.react';
import ShowAllBooksContainer from './react/ShowAllBooksContainer.react';
import SideColumn from './react/SideColumn.react';

export default function App() {
    const [showSideColumn, setShowSideColumn] = useState(false);
    const [sideColumnType, setsideColumnType] = useState(null);
    const [authorID, setAuthorID] = useState(null);

    const toggleSideColumn = () => {
        setShowSideColumn(!showSideColumn);
    };

    return (
        <div class="row">
            <div class="col">
                <ShowAuthorsContainer 
                    toggleSideColumn= {toggleSideColumn}
                    setsideColumnType= {setsideColumnType}
                    setAuthorID={setAuthorID}
                />
                <ShowAllBooksContainer
                    toggleSideColumn= {toggleSideColumn}
                    setsideColumnType= {setsideColumnType}
                />
            </div>
            {showSideColumn && (
                <div class="col">
                    <SideColumn 
                        sideColumnType ={sideColumnType}
                        authorID={authorID}
                        toggleSideColumn= {toggleSideColumn}
                    />
                </div>
            )}
        </div>
    );
}