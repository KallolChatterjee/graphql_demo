Sample Query with Inputs:

Create Author :

mutation CreateAuthor($authorInput: AuthorInput) {
  createAuthor(input: $authorInput) {
    id
    name
    email
  }
}

I/P :

{
  "authorInput": {
    "name": "Aranyak Maity",
    "email": "aranyak@gmail.com"
  }
}

Update Author :

mutation UpdateAuthor(
  $id: ID!,
  $authorInput: AuthorInput,
) {
  updateAuthor(id: $id, input: $authorInput) {
    id
    name
    email
  }
}

I/P:

{
  "id": "70125f5182f2046a5f71",
  "authorInput": {
    "name": "Aranyak Maity",
    "email": "aranyak10@gmail.com"
  }
}

Query FindAuthors

query FindAuthors($id: ID!) {
  getAuthor(id: $id) {
    id
    name
    email
  }
}

I/P :
{
  "id": "54ce353bb9f32c69f882"
}

Query ShowAuthors

query ShowAuthors {
  showAllAuthor {
    id
    name
    email
  }
}

I/P: 
{}