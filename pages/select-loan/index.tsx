import * as React from "react";

import { Button } from "../../components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { ComboboxUsers } from "../../components/user-combobox/combo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { UserWithRole } from "@/types/User";
import { Spinner } from "@radix-ui/themes";
import SessionNotFound from "@/components/common/SessionNotFound";
import AuthGuard from "@/components/authguard/AuthGuard";

export default function SelectUserLoan() {
	const [selectedUser, setSelectedUser] = useState<User>();
	const router = useRouter();

	const redirect = () => {
		if (selectedUser) {
			router.push(`/loans/${selectedUser.id}`);
		} else {
			router.push("/loans");
		}
	};
	const { data: session, status } = useSession();
	if (status === "loading") {
		return <Spinner className="mx-auto" />;
	}

	// if (!session) {
	// 	console.log("No hay sesión");
	// 	return <SessionNotFound />;
	// }

	const user: UserWithRole | undefined = session?.user;
	const role = user?.role;
	return (
		<AuthGuard>
			<div className="text-center align-middle text-white relative z-10 p-10 h-full flex items-center justify-center">
				<div>
					<div className="ml-auto mr-auto  ">
						<Card className=" mx-auto bg-gray-200">
							<CardHeader>
								<CardTitle>Selecionar usuario para obtener prestamos</CardTitle>
								<CardDescription>
									Selecciona el usuario para obtener los prestamos realizados, si no
									seleccionas, se mostrarán todos los prestamos que existe para todos los
									usuarios
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col space-y-1.5 justify-center">
									<Label htmlFor="framework">Username</Label>
									<div className="flex items-center justify-center space-x-4 text-black w-full">
										<ComboboxUsers
											setSelectedUser={setSelectedUser}
											selectedUser={selectedUser}
										/>
									</div>
								</div>
							</CardContent>
							<Button onClick={redirect}>Obtener Prestamos</Button>
						</Card>
					</div>
				</div>
			</div>
		</AuthGuard>
	);
}
