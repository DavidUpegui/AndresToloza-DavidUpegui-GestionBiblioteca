import React from "react";
import { GrCatalogOption } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import { PiUsersBold } from "react-icons/pi";
import NavLink from "./NavLink";

const NavBar = () => {
	return (
		<nav className="flex flex-col gap-y-4">
			<NavLink href="/books">
				<GrCatalogOption /> Catálogo
			</NavLink>
			<NavLink href="/transactions">
				<GrTransaction /> Transacciones
			</NavLink>
			<NavLink href="/users">
				<PiUsersBold /> Usuarios
			</NavLink>
		</nav>
	);
};

export default NavBar;
