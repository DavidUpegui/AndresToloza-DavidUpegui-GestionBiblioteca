import Link from "next/link";
import React, { ReactNode } from "react";
import { useRouter } from "next/router";

interface Props {
	href: string;
	children: ReactNode;
}
const NavLink = ({ href, children }: Props) => {
	const { pathname } = useRouter();
	return (
		<Link
			data-active={pathname === href}
			href={href}
			className="data-[active=true]:text-black data-[active=true]:underline flex text-gray-500 items-center gap-x-3 hover:text-gray-700 font-semibold"
		>
			{" "}
			{children}
		</Link>
	);
};

export default NavLink;
