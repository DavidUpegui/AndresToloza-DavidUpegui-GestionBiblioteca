import { gql } from 'apollo-server-micro';

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
export  {ADD_BOOK_MUTATION};
