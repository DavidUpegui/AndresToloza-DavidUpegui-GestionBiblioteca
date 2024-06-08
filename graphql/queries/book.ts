import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks{
    books {
      id
      email
    }
  }
`;
export { GET_BOOKS };
