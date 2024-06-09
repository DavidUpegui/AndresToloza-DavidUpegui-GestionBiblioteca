import client from "@/hooks/useApolloClient";
import "@/styles/globals.css";
// import {client} from '@/graphql/client';
import { ApolloProvider } from "@apollo/client";
import Sidebar from "./sidebar";
import "@radix-ui/themes/styles.css";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
	return (
		<ApolloProvider client={client}>
			<SessionProvider>
					<Layout>
						<div className="flex-1 pg-4">
							<Component {...pageProps} />
						</div>
					</Layout>
			</SessionProvider>
		</ApolloProvider>
	);
};

export default App;
