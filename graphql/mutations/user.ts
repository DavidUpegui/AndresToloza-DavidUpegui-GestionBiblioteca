import { gql } from 'apollo-server-micro';

const UPDATE_USER_ROLE = gql`
mutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateOneUser(data: $data, where: $where) {
      id
      name
    }
  }
`;

export  {UPDATE_USER_ROLE};
