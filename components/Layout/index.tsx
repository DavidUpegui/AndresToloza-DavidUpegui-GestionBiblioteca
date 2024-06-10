import React, { ReactNode } from "react";
import SideHeader from "./SideHeader";

interface Props {
	children: ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<div className="flex w-full">
			<div className="w-1/6">
				<SideHeader />
			</div>
			<div className=" flex-1 w-full">{children}</div>
		</div>
	);
};

export default Layout;
