import React, { useEffect } from 'react';
import '../App.css';
import {
  RelayEnvironmentProvider,
  useQueryLoader,
} from 'react-relay/hooks';
import RelayEnvironment from '../RelayEnvironment';
import ShowAuthors from './ShowAuthors.react'
import { ShowAuthorsQuery } from "../query/ShowAuthorsQuery";

const { Suspense } = React;

function ShowAuthorsContainer(props) {
  const[queryReference, loadQuery] = useQueryLoader(
    ShowAuthorsQuery,
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
          <ShowAuthors 
            queryReference={queryReference} 
            toggleSideColumn= {props.toggleSideColumn}
            setsideColumnType={props.setsideColumnType}
            setAuthorID={props.setAuthorID}
            showAsDropDown={props.showAsDropDown}
            sideColumnType={props.sideColumnType}
            isSideColumnShown={props.isSideColumnShown}
          />
        )}
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default ShowAuthorsContainer;
