import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import readingAnimation from "../assets/reading-animation.json";

const Home = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 px-8 py-8 lg:py-16 mt-16 items-center gap-16 lg:gap-8">
			{/* Left Side Text */}
			<div>
				<span className="bg-yellow-400 rounded-full px-3 text-sm font-bold">
					ON SALE !
				</span>
				<h2 className="text-4xl font-bold">
					A reader lives a thousand lives{" "}
					<span className="text-blue-400">before he dies</span>
				</h2>
				<p className="text-gray-500 text-lg font-medium mt-6">
					Books are a uniquely portable magic. Books serve to show a
					man that those original thoughts of his aren’t very new
					after all. The man who does not read good books is no better
					than the man who can’t.
				</p>
				<div className="flex gap-8 mt-8">
					<button className="text-white bg-blue-400 hover:bg-blue-500 transition-colors duration-300 rounded-md py-3 px-6 flex gap-2 font-medium shadow-md">
						Visit Store <ShoppingCartIcon className="w-6 h-6" />
					</button>
					<button className="font-semibold hover:text-blue-600 transition-colors duration-300">
						Learn More
					</button>
				</div>
			</div>
			{/* Right Side Animation */}
			<div>
				<Lottie animationData={readingAnimation} loop={true} />
			</div>
		</div>
	);
};

export default Home;
