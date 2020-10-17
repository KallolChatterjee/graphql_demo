/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Author_author$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorsList_author$ref: FragmentReference;
declare export opaque type AuthorsList_author$fragmentType: AuthorsList_author$ref;
export type AuthorsList_author = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: Author_author$ref,
  +$refType: AuthorsList_author$ref,
|}>;
export type AuthorsList_author$data = AuthorsList_author;
export type AuthorsList_author$key = $ReadOnlyArray<{
  +$data?: AuthorsList_author$data,
  +$fragmentRefs: AuthorsList_author$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "AuthorsList_author",
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
      "name": "Author_author"
    }
  ],
  "type": "Author",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '9b4b82c65c7065b531f8f158e20df8a7';

module.exports = node;
