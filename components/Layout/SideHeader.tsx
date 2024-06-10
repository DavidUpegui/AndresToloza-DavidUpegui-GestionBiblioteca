import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";
import { IoLibrary } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { CgLogOut } from "react-icons/cg";

const SideHeader = () => {
	return (
		<header className="flex flex-col h-screen bg-gray-200">
			<Link
				href="/books"
				className="flex items-center  ml-4 mt-4 mb-4 gap-x-3 text-gray-900 hover:text-gray-700"
			>
				<IoLibrary className="w-6 h-6" />
				<h2 className="text-2xl font-bold ">Biblioteca</h2>
			</Link>
			<hr className="bg-gray-500 boder border-bg-gray-950 h-[2px]" />
			<div className="mt-4 pl-10 relative h-full">
				<NavBar />
				<button
					className="mt-20 data-[active=true]:text-black data-[active=true]:underline flex text-gray-500 items-center gap-x-3 hover:text-gray-700 font-semibold"
					onClick={() => {
						signOut({callbackUrl: '/login'});
					}}
				>
					{" "}
					<CgLogOut /> Salir
				</button>
			</div>
		</header>
	);
};

export default SideHeader;
