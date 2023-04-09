import React from "react";

const Meal = (props) => {
	const { strMeal, strInstructions, strMealThumb, strYoutube, strSource } =
		props.meal;
	return (
		<div className="rounded-xl relative overflow-hidden  h-[28rem]">
			<img className="w-full h-full object-cover" src={strMealThumb} alt="meal image" />
			<div className="flex flex-col absolute inset-0 text-center p-6 bg-black bg-opacity-70 text-white hover:opacity-100 opacity-0 transition-opacity duration-300">
				<h3 className=" mb-4 text-2xl font-extrabold">{strMeal}</h3>
				<p className="text-lg h-48 overflow-hidden">{strInstructions}</p>
				<div className="mt-auto font-semibold flex items-center flex-wrap gap-2 justify-center">
					<a
						className="px-4 py-2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100  rounded-md"
						href={strSource}
					>
						Source Info
					</a>
					<a
						className="px-4 py-2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100  rounded-md"
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
