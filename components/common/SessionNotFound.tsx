import { Button } from "@radix-ui/themes";
import { useRouter } from "next/router";
import React from "react";

const SessionNotFound = () => {
    const router = useRouter()
	return (
		<div className="flex m-auto justify-center items-center h-screen w-full" >
			<div className="bg-gray-200 p-4 rounded-md">
				<h1 className="text-xl font-bold mb-2">
					You must log in for this resource
				</h1>
				<p className="text-gray-600">Please, log in</p>
				<div className="flex justify-center mt-5">
					<Button onClick={() => router.push("/login")}>Go login</Button>
				</div>
			</div>
		</div>
	);
};

export default SessionNotFound;
