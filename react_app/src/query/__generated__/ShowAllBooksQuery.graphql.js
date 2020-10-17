/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BooksList_book$ref = any;
type ShowAllBookPerAuthor_book$ref = any;
export type ShowAllBooksQueryVariables = {||};
export type ShowAllBooksQueryResponse = {|
  +showAllBooks: ?$ReadOnlyArray<{|
    +$fragmentRefs: BooksList_book$ref & ShowAllBookPerAuthor_book$ref
  |}>
|};
export type ShowAllBooksQuery = {|
  variables: ShowAllBooksQueryVariables,
  response: ShowAllBooksQueryResponse,
|};
*/


/*
query ShowAllBooksQuery {
  showAllBooks {
    ...BooksList_book
    ...ShowAllBookPerAuthor_book
    id
  }
}

fragment Book_book on Book {
  name
  desc
  author {
    id
    name
    email
  }
}

fragment BooksList_book on Book {
  id
  ...Book_book
}

fragment ShowAllBookPerAuthor_book on Book {
  name
  desc
  author {
    id
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowAllBooksQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "showAllBooks",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BooksList_book"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowAllBookPerAuthor_book"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShowAllBooksQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "showAllBooks",
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Author",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4053076ea5ece70869893b48217eb284",
    "id": null,
    "metadata": {},
    "name": "ShowAllBooksQuery",
    "operationKind": "query",
    "text": "query ShowAllBooksQuery {\n  showAllBooks {\n    ...BooksList_book\n    ...ShowAllBookPerAuthor_book\n    id\n  }\n}\n\nfragment Book_book on Book {\n  name\n  desc\n  author {\n    id\n    name\n    email\n  }\n}\n\nfragment BooksList_book on Book {\n  id\n  ...Book_book\n}\n\nfragment ShowAllBookPerAuthor_book on Book {\n  name\n  desc\n  author {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ab505fc6020e274683098cd08e50a45';

module.exports = node;
