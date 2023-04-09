import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	return (
		<div className="">
			<Header />
			<div className="min-h-[79vh] py-4 lg:px-10 2xl:mx-36 xl:mx-20 lg:mx-0 mx-0">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default App;
