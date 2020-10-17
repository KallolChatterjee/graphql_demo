import React from 'react';
import '../App.css';
import {
  usePreloadedQuery,
} from 'react-relay/hooks';
import { ShowAuthorsQuery } from "../query/ShowAuthorsQuery";
import AuthorsList from './AuthorsList.react';

export default function ShowAuthors(props) {
    const data = usePreloadedQuery(
      ShowAuthorsQuery, 
      props.queryReference,
    );
    const authors = data.showAllAuthor ?? [];
    return (
        <AuthorsList 
            authors={authors} 
            toggleSideColumn= {props.toggleSideColumn}
            setsideColumnType={props.setsideColumnType}
            setAuthorID={props.setAuthorID}
        />
    );
  }