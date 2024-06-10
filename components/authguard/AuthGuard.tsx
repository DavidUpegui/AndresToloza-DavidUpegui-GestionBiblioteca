import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

interface Props {
	children: ReactNode;
}
const AuthGuard = ({ children }: Props) => {
	const { status } = useSession();
	const router = useRouter();

	console.log('Status: ', status)

	useEffect(() => {
		console.log('unauthenticated')
		if (status === "unauthenticated") {
			router.push("/login");
		}
	}, [status, router]);


	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "authenticated") {
		return <div className="bg-black">{children}</div>;
	}
	console.log('Llega al null')

	return null;
};

export default AuthGuard;
