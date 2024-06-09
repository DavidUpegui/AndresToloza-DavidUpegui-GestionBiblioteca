import { gql } from "@apollo/client";

const GET_LOANS = gql`
  query GetLoans {
    loans {
      id
      user {
        id
        name
      }
      book {
        id
        title
      }
      status
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
      }
      book {
        id
        title
      }
      status
    }
  }
`;

export { GET_LOANS, GET_LOANS_BY_USER };
