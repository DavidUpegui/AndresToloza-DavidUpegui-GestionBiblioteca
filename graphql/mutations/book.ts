import { gql } from "apollo-server-micro";

const ADD_BOOK_MUTATION = gql`
  mutation CreateOneBook($data: BookCreateInput!) {
    createOneBook(data: $data) {
      id
      title
      author
      description
      category
      image
      quantityAvaiable
    }
  }
`;

const DELETE_BOOK = gql`
mutation DeleteOneBook($where: BookWhereUniqueInput!) {
    deleteOneBook(where: $where) {
      id
    }
  }
`;

const DELETE_BOOK_UNIT = gql`
mutation DeletBookUnit($data: BookUpdateInput!, $where: BookWhereUniqueInput!) {
    updateOneBook(data: $data, where: $where) {
      id
    }
  }
`;



const UPDATE_BOOK = gql`
  mutation CreateOneBook($data: BookCreateInput!) {
    createOneBook(data: $data) {
      id
      title
      author
      description
      category
      image
      quantityAvaiable
    }
  }
`;




export { ADD_BOOK_MUTATION,DELETE_BOOK,UPDATE_BOOK,DELETE_BOOK_UNIT };
