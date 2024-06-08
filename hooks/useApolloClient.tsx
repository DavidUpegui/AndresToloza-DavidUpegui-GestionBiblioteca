import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:3000/api/graphql', // Asegúrate de que la URL del endpoint sea correcta
       
    }),
    cache: new InMemoryCache(),
});

export default client;