import client from "@/hooks/useApolloClient";
import "@/styles/globals.css";
// import {client} from '@/graphql/client';
import { ApolloProvider } from "@apollo/client";
import Sidebar from "./sidebar";
import '@radix-ui/themes/styles.css';
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <ApolloProvider client={client}>
      <SessionProvider>

      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 pg-4">
          <Component {...pageProps} />
        </div>
      </div>
      </SessionProvider>

    </ApolloProvider>
  );
};

export default App;
