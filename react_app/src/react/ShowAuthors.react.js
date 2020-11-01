import React from 'react';
import '../App.css';
import {
  usePreloadedQuery,
} from 'react-relay/hooks';
import { ShowAuthorsQuery } from "../query/ShowAuthorsQuery";
import AuthorsList from './AuthorsList.react';
import AuthorsDropDown from './AuthorsDropDown.react';

export default function ShowAuthors(props) {
    const data = usePreloadedQuery(
      ShowAuthorsQuery, 
      props.queryReference,
    );
    const authors = data.showAllAuthor ?? [];
    
    const component = props.showAsDropDown === true ? (
        <AuthorsDropDown 
            authors={authors}
            setAuthorID={props.setAuthorID}
        />
    ):  (
    <AuthorsList 
        authors={authors} 
        toggleSideColumn= {props.toggleSideColumn}
        setsideColumnType={props.setsideColumnType}
        setAuthorID={props.setAuthorID}
        sideColumnType={props.sideColumnType}
        isSideColumnShown={props.isSideColumnShown}
    />
    );

    return component;
  }