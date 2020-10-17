/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ShowAllBookPerAuthor_book$ref: FragmentReference;
declare export opaque type ShowAllBookPerAuthor_book$fragmentType: ShowAllBookPerAuthor_book$ref;
export type ShowAllBookPerAuthor_book = $ReadOnlyArray<{|
  +name: ?string,
  +desc: ?string,
  +author: ?{|
    +id: string
  |},
  +$refType: ShowAllBookPerAuthor_book$ref,
|}>;
export type ShowAllBookPerAuthor_book$data = ShowAllBookPerAuthor_book;
export type ShowAllBookPerAuthor_book$key = $ReadOnlyArray<{
  +$data?: ShowAllBookPerAuthor_book$data,
  +$fragmentRefs: ShowAllBookPerAuthor_book$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ShowAllBookPerAuthor_book",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Book",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'aad24bcb45e17b112fea357e2ecaf121';

module.exports = node;
