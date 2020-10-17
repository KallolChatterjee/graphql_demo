import React, { useEffect } from 'react';
import '../App.css';
import {
  RelayEnvironmentProvider,
  useQueryLoader,
} from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';
import ShowBooks from './ShowBooks.react'
import { ShowAllBooksQuery } from "../query/ShowAllBooksQuery";

const { Suspense } = React;

function ShowAllBooksContainer(props) {
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
          <ShowBooks 
            queryReference={queryReference} 
            toggleSideColumn= {props.toggleSideColumn}
            setsideColumnType={props.setsideColumnType}
          />
        )}
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default ShowAllBooksContainer;
