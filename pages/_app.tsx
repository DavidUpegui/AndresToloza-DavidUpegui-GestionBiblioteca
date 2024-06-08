import client from "@/hooks/useApolloClient";
import "@/styles/globals.css";
// import {client} from '@/graphql/client';
import { ApolloProvider } from "@apollo/client";
import Sidebar from "./sidebar";
import '@radix-ui/themes/styles.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <ApolloProvider client={client}>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 pg-4">
          <Component {...pageProps} />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
