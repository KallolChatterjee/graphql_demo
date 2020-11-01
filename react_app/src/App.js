import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ShowAuthorsContainer from './react/ShowAuthorsContainer.react';
import ShowAllBooksContainer from './react/ShowAllBooksContainer.react';
import SideColumn from './react/SideColumn.react';

export default function App() {
    const [isSideColumnShown, setIsSideColumnShown] = useState(false);
    const [sideColumnType, setsideColumnType] = useState(null);
    const [authorID, setAuthorID] = useState(null);

    const toggleSideColumn = () => {
        setIsSideColumnShown(!isSideColumnShown);
    };

    return (
        <div class="row">
            <div class="col">
                <ShowAuthorsContainer 
                    toggleSideColumn= {toggleSideColumn}
                    setsideColumnType= {setsideColumnType}
                    setAuthorID={setAuthorID}
                    showAsDropDown={false}
                    sideColumnType={sideColumnType}
                    isSideColumnShown={isSideColumnShown}
                />
                <ShowAllBooksContainer
                    toggleSideColumn= {toggleSideColumn}
                    setsideColumnType= {setsideColumnType}
                    sideColumnType={sideColumnType}
                    isSideColumnShown={isSideColumnShown}
                />
            </div>
            {isSideColumnShown && (
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