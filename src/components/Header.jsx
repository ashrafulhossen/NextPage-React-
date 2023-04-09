import { Bars3Icon, BoltIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
	const [isMenuShow, setIsMenuShow] = useState(false);

	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};

	return (
		<nav className={`bg-blue-100 lg:rounded-xl flex justify-between mt-0 lg:mt-1 py-4 px-10 2xl:mx-36 xl:mx-20 lg:mx-8 mx-0 relative lg:mb-0 ${isMenuShow && "mb-48"}`}>
			<h1
				onClick={goHome}
				className=" text-3xl font-extrabold cursor-pointer"
			>
				<BoltIcon className="h-6 w-6 text-blue-600 inline mr-1" />
				NextPage
			</h1>
			<div
				className="lg:hidden"
				onClick={() => setIsMenuShow(!isMenuShow)}
			>
				{isMenuShow ? (
					<XMarkIcon className="w-6 h-6" />
				) : (
					<Bars3Icon className="w-6 h-6" />
				)}
			</div>
			<div
				className={`${
					isMenuShow
						? "flex flex-col mt-12 absolute top-12"
						: "hidden"
				} lg:flex lg:flex-row lg:static lg:mt-0 lg:items-center lg:gap-8`}
			>
				<NavLink
					to="/"
					className={({ isActive }) =>
						`py-2 px-4 text-xl rounded-lg ${
							isActive ? "bg-blue-500" : "hover:bg-blue-200"
						}`
					}
				>
					Home
				</NavLink>
				<NavLink
					to="/books"
					className={({ isActive }) =>
						`py-2 px-4 text-xl rounded-lg ${
							isActive ? "bg-blue-500" : "hover:bg-blue-200"
						}`
					}
				>
					Books
				</NavLink>
				<NavLink
					to="/meals"
					className={({ isActive }) =>
						`py-2 px-4 text-xl rounded-lg ${
							isActive ? "bg-blue-500" : "hover:bg-blue-200"
						}`
					}
				>
					Meals
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) =>
						`py-2 px-4 text-xl rounded-lg ${
							isActive ? "bg-blue-500" : "hover:bg-blue-200"
						}`
					}
				>
					About
				</NavLink>
			</div>
		</nav>
	);
};

export default Header;
