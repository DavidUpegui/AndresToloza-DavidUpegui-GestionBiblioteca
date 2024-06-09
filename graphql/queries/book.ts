import { gql } from "@apollo/client";

const GET_BOOKS = gql`
query GetBooks {
    books {
      id
      title
      author
      description
      category
      image
      quantityAvaiable
      loans {
        userId
        bookId
      }
      createdBy{
        id
        email
      }
    }
  }
`;

const GET_AVAILABLE_BOOKS = gql`
query GetBooks {
    books {
      id
      title
      author
      description
      category
      image
      quantityAvaiable
      loans {
        userId
        bookId
      }
      createdBy{
        id
        email
      }
    }
  }
`;

const GET_BOOKS_BY_FILTER = gql`
query GetBooks($where: BookWhereInput) {
    books(where: $where) {
      id
      title
      author
      description
      category
      image
      quantityAvaiable
      loans {
        userId
        bookId
      }
      createdBy {
        id
        email
      }
    }
  }
  
`;




export { GET_BOOKS,GET_AVAILABLE_BOOKS,GET_BOOKS_BY_FILTER };
