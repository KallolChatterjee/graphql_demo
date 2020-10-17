import React from 'react';
import '../App.css';
import {
  usePreloadedQuery,
} from 'react-relay/hooks';
import { ShowAllBooksQuery } from "../query/ShowAllBooksQuery";
import ShowAllBookPerAuthor from './ShowAllBookPerAuthor.react';

export default function ShowAllBooksPerAuthorDetails(props) {
    const data = usePreloadedQuery(
        ShowAllBooksQuery, 
        props.queryReference,
    );
    const books = data.showAllBooks ?? [];
    return (
        <ShowAllBookPerAuthor 
            books={books} 
            authorID= {props.authorID}
        />
    );
  }