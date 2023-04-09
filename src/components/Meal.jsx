import React from "react";

const Meal = (props) => {
	const { strMeal, strInstructions, strMealThumb, strYoutube, strSource } =
		props.meal;
	return (
		<div className="rounded-xl relative overflow-hidden ">
			<img src={strMealThumb} alt="meal image" />
			<div className="absolute inset-0 text-center py-12 px-8 bg-black bg-opacity-70 text-white hover:opacity-100 opacity-0 transition-opacity duration-300">
				<h3 className=" mb-6 text-2xl font-extrabold">{strMeal}</h3>
				<p className="text-lg">{strInstructions.slice(0, 250)}</p>
				<div className="mt-8 font-semibold">
					<a
						className="px-4 py-2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100  rounded-md"
						href={strSource}
					>
						Source Info
					</a>
					<a
						className="ml-4 px-4 py-2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100  rounded-md"
						href={strYoutube}
					>
						More Details
					</a>
				</div>
			</div>
		</div>
	);
};

export default Meal;
