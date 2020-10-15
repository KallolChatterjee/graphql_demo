Ruun By : npm start
Graphiql : http://localhost:4000/graphql

Sample Query with Inputs:

Create Author :

mutation CreateAuthor($authorInput: AuthorInput) {
  createAuthor(input: $authorInput) {
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

I/P :

{
  "authorInput": {
    "name": "Aranyak Maity",
    "email": "aranyak@gmail.com"
  }
}

Update Author :

mutation UpdateAuthor($id: ID!, $authorInput: AuthorInput) {
  updateAuthor(id: $id ,input: $authorInput) {
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
    books {
      id
      name
      desc
    }
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
    books {
      id
      name
      desc
    }
  }
}

I/P: 
{}

Create Book :

mutation CreateBook($bookInput: BookInput) {
  createBook(input: $bookInput) {
    id
    name
    desc
    author {
      id
      name
      email
    }
  }
}

I/P:
{
  "bookInput": {
    "name": "The Bohemian Souls",
    "desc": "Our Travel journey",
    "authorID": "d0f13dfbcfa7c41d1d57"
  }
}

Show Books:

query ShowBooks {
  showAllBooks {
    id
    name
    desc
    author {
      id
      name
      email
    }
  }
}

I/P:
{}

Find Book:

query FindBook($id: ID!) {
  getBook(id: $id) {
    id
    name
    desc
    author {
      id
      name
      email
    }
  }
}

I/P:

{
  "id": "39bb023a24acd8d2dc20"
}

Update Book:

mutation UpdateBook($id: ID!, $bookInput: BookInput) {
  updateBook(id: $id, input: $bookInput) {
    id
    name
    desc
    author {
      id
      name
      email
    }
  }
}

I/P:

{
  "id": "39bb023a24acd8d2dc20", 
  "bookInput": {
    "name": "The Bong Foodie Souls",
    "desc": "Our Gastronomical journey",
    "authorID": "d0f13dfbcfa7c41d1d57"
  }
}