import {gql} from '@apollo/client'


const GET_LOANS=gql`
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
export  {GET_LOANS};