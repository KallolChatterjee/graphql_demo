/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Book_book$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BooksList_book$ref: FragmentReference;
declare export opaque type BooksList_book$fragmentType: BooksList_book$ref;
export type BooksList_book = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: Book_book$ref,
  +$refType: BooksList_book$ref,
|}>;
export type BooksList_book$data = BooksList_book;
export type BooksList_book$key = $ReadOnlyArray<{
  +$data?: BooksList_book$data,
  +$fragmentRefs: BooksList_book$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "BooksList_book",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Book_book"
    }
  ],
  "type": "Book",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '57e67c8742b896d7e1525543844197f1';

module.exports = node;
