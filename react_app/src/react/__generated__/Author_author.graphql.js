/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Author_author$ref: FragmentReference;
declare export opaque type Author_author$fragmentType: Author_author$ref;
export type Author_author = {|
  +id: string,
  +name: ?string,
  +email: ?string,
  +books: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +desc: ?string,
  |}>,
  +$refType: Author_author$ref,
|};
export type Author_author$data = Author_author;
export type Author_author$key = {
  +$data?: Author_author$data,
  +$fragmentRefs: Author_author$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Author_author",
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
  "type": "Author",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db997fdf67e26ac1e4a3e8f8fad0ca10';

module.exports = node;
