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
    }
  }
  
`;
export { GET_BOOKS };
