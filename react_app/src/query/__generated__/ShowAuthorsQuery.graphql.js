/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AuthorsList_author$ref = any;
export type ShowAuthorsQueryVariables = {||};
export type ShowAuthorsQueryResponse = {|
  +showAllAuthor: ?$ReadOnlyArray<{|
    +$fragmentRefs: AuthorsList_author$ref
  |}>
|};
export type ShowAuthorsQuery = {|
  variables: ShowAuthorsQueryVariables,
  response: ShowAuthorsQueryResponse,
|};
*/


/*
query ShowAuthorsQuery {
  showAllAuthor {
    ...AuthorsList_author
    id
  }
}

fragment Author_author on Author {
  id
  name
  email
  books {
    id
    name
    desc
  }
}

fragment AuthorsList_author on Author {
  id
  ...Author_author
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
    "name": "ShowAuthorsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "showAllAuthor",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuthorsList_author"
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
    "name": "ShowAuthorsQuery",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "04ffef0695e26d312d7a422c740a6276",
    "id": null,
    "metadata": {},
    "name": "ShowAuthorsQuery",
    "operationKind": "query",
    "text": "query ShowAuthorsQuery {\n  showAllAuthor {\n    ...AuthorsList_author\n    id\n  }\n}\n\nfragment Author_author on Author {\n  id\n  name\n  email\n  books {\n    id\n    name\n    desc\n  }\n}\n\nfragment AuthorsList_author on Author {\n  id\n  ...Author_author\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3a288383a8354e1aa975e588f2660002';

module.exports = node;
