import React, { ReactNode } from "react";
import SideHeader from "./SideHeader";

interface Props {
	children: ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<div className="flex">
			<SideHeader />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
