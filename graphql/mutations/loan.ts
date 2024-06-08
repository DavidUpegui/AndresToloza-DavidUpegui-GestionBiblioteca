import { gql } from 'apollo-server-micro';

const CREATE_LOAN = gql`
mutation CreateOneLoan($data: LoanCreateInput!) {
    createOneLoan(data: $data) {
      id
      userId
      bookId
      status
    }
  }
`;
export  {CREATE_LOAN};
