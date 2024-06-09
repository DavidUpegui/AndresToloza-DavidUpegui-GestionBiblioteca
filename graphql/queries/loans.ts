import { gql } from "@apollo/client";

const GET_LOANS = gql`
  query GetLoans {
    loans {
      id
      user {
        id
        name
        email
      }
      book {
        id
        title
      }
      status
      createdBy {
        id
        email
      }
    }
  }
`;

const GET_LOANS_BY_USER = gql`
  query GetLoansWhere($where: LoanWhereInput) {
    loans(where: $where) {
      id
      user {
        id
        name
        email
      }
      book {
        id
        title
      }
      status
      createdBy {
        id
        email
      }
    }
  }
`;



export { GET_LOANS, GET_LOANS_BY_USER };
