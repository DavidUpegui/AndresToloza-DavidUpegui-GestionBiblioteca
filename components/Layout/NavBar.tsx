import React from "react";
import { GrCatalogOption } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import { PiUsersBold } from "react-icons/pi";
import NavLink from "./NavLink";
import { useSession } from "next-auth/react";
import { UserWithRole } from "@/types/User";
import { SlMagnifier } from "react-icons/sl";


const NavBar = () => {
	const { data: session } = useSession();
	const user: UserWithRole | undefined = session?.user;
	const role = user?.role;
	return (
		<nav className="flex flex-col gap-y-4">
			<NavLink href="/">
				<GrCatalogOption /> Catálogo
			</NavLink>
			<NavLink href="/loans">
				<GrTransaction /> Préstamos
			</NavLink>
			<NavLink href="/select-loan">
				<SlMagnifier /> Bucar Préstamo
			</NavLink>
			{role === "ADMIN" && (
				<NavLink href="/users">
					<PiUsersBold /> Usuarios
				</NavLink>
			)}
		</nav>
	);
};

export default NavBar;
