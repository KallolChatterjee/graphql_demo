/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorsDropDown_author$ref: FragmentReference;
declare export opaque type AuthorsDropDown_author$fragmentType: AuthorsDropDown_author$ref;
export type AuthorsDropDown_author = $ReadOnlyArray<{|
  +id: string,
  +name: ?string,
  +$refType: AuthorsDropDown_author$ref,
|}>;
export type AuthorsDropDown_author$data = AuthorsDropDown_author;
export type AuthorsDropDown_author$key = $ReadOnlyArray<{
  +$data?: AuthorsDropDown_author$data,
  +$fragmentRefs: AuthorsDropDown_author$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "AuthorsDropDown_author",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Author",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'a2638c7f9e8b44e6aaa937489d28593a';

module.exports = node;
