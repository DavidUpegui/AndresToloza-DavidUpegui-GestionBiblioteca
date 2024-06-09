import { gql } from "apollo-server-micro";

const CREATE_LOAN = gql`
  mutation CreateOneLoan(
    $data: LoanCreateInput!
    $updateOneBookData2: BookUpdateInput!
    $where: BookWhereUniqueInput!
  ) {
    createOneLoan(data: $data) {
      id
      userId
      bookId
      status
    }
    updateOneBook(data: $updateOneBookData2, where: $where) {
      id
    }
  }
`;

const UPDATE_LOAN=gql`
mutation UpdateOneLoan($data: LoanUpdateInput!, $where: LoanWhereUniqueInput!) {
    updateOneLoan(data: $data, where: $where) {
      id
      status
    }
  }
`;

export { CREATE_LOAN,UPDATE_LOAN };
