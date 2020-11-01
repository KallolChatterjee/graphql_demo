import React from 'react';
import '../App.css';
import {
  usePreloadedQuery,
} from 'react-relay/hooks';
import { ShowAllBooksQuery } from "../query/ShowAllBooksQuery";
import BooksList from './BooksList.react';

export default function ShowAuthors(props) {
    const data = usePreloadedQuery(
        ShowAllBooksQuery, 
        props.queryReference,
    );
    const books = data.showAllBooks ?? [];
    return (
        <BooksList 
            books={books} 
            toggleSideColumn= {props.toggleSideColumn}
            setsideColumnType={props.setsideColumnType}
            sideColumnType={props.sideColumnType}
            isSideColumnShown={props.isSideColumnShown}
        />
    );
  }