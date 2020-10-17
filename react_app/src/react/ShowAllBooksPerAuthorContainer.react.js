import React, { useEffect } from 'react';
import '../App.css';
import {
  RelayEnvironmentProvider,
  useQueryLoader,
} from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';
import ShowAllBooksPerAuthorDetails from './ShowAllBooksPerAuthorDetails.react'
import { ShowAllBooksQuery } from "../query/ShowAllBooksQuery";

const { Suspense } = React;

function ShowAllBooksPerAuthorContainer(props) {
  const[queryReference, loadQuery] = useQueryLoader(
    ShowAllBooksQuery,
  );
  useEffect(() => {
    loadQuery(
      {},
      {fetchPolicy: 'store-or-network'},
    );
  }, [loadQuery]);

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        {queryReference != null && (
          <ShowAllBooksPerAuthorDetails 
            queryReference={queryReference} 
            authorID={props.authorID}
          />
        )}
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default ShowAllBooksPerAuthorContainer;
