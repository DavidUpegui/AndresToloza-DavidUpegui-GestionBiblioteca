import { gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
    }
  }
`;
export { GET_USERS };
