import client from "@/hooks/useApolloClient";
import "@/styles/globals.css";
// import {client} from '@/graphql/client';
import { ApolloProvider } from "@apollo/client";
import Sidebar from "./sidebar";
import "@radix-ui/themes/styles.css";
import { SessionProvider, useSession } from "next-auth/react";
import Layout from "@/components/Layout";

const App = ({
	Component,
	pageProps: { session, ...pageProps },
	...appProps
}: any) => {
	if ([`/login`].includes(appProps.router.pathname))
		return (
			<ApolloProvider client={client}>
				<SessionProvider>
					<div className="flex-1 pg-4">
						<Component {...pageProps} />
					</div>
				</SessionProvider>
			</ApolloProvider>
		);

	return (
		<ApolloProvider client={client}>
			<SessionProvider>
				<div className="flex w-full">
					<Layout>
						<div className="">
							<Component {...pageProps} />
						</div>
					</Layout>
				</div>
			</SessionProvider>
		</ApolloProvider>
	);
};

export default App;
