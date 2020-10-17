/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Book_book$ref: FragmentReference;
declare export opaque type Book_book$fragmentType: Book_book$ref;
export type Book_book = {|
  +name: ?string,
  +desc: ?string,
  +author: ?{|
    +id: string,
    +name: ?string,
    +email: ?string,
  |},
  +$refType: Book_book$ref,
|};
export type Book_book$data = Book_book;
export type Book_book$key = {
  +$data?: Book_book$data,
  +$fragmentRefs: Book_book$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Book_book",
  "selections": [
    (v0/*: any*/),
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
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
  "type": "Book",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd817f0e1728a463a137984675d5b6b3e';

module.exports = node;
