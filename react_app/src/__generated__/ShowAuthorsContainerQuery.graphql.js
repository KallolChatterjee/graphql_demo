/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ShowAuthorsContainerQueryVariables = {||};
export type ShowAuthorsContainerQueryResponse = {|
  +showAllAuthor: ?$ReadOnlyArray<{|
    +id: string,
    +name: ?string,
    +email: ?string,
    +books: ?$ReadOnlyArray<?{|
      +id: string,
      +name: ?string,
      +desc: ?string,
    |}>,
  |}>
|};
export type ShowAuthorsContainerQuery = {|
  variables: ShowAuthorsContainerQueryVariables,
  response: ShowAuthorsContainerQueryResponse,
|};
*/


/*
query ShowAuthorsContainerQuery {
  showAllAuthor {
    id
    name
    email
    books {
      id
      name
      desc
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "showAllAuthor",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "desc",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowAuthorsContainerQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShowAuthorsContainerQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "cc37dffb89e0f781ad04a09ca2bbef2f",
    "id": null,
    "metadata": {},
    "name": "ShowAuthorsContainerQuery",
    "operationKind": "query",
    "text": "query ShowAuthorsContainerQuery {\n  showAllAuthor {\n    id\n    name\n    email\n    books {\n      id\n      name\n      desc\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b4e2c0edcc7aed5cd5daf441a62880f2';

module.exports = node;
