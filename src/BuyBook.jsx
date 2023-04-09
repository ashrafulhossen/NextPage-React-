import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BuyBook = () => {
	const {
		image,
		title,
		authors,
		publisher,
		rating,
		year,
		language,
		isbn13,
		desc,
        price
	} = useLoaderData();
	const [descShowMore, setDescShowMore] = useState(true);

	const ratingStarsArr = [];
	for (let i = 0; i < rating; i++) {
		ratingStarsArr.push(
			<StarIcon key={i} className="w-4 text-yellow-400" />
		);
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 items-center py-12 mt-16 border rounded-2xl">
			<img className="w-full " src={image} alt="book image" />
			<div className="pr-10">
                <span className="text-sm font-bold bg-yellow-300 py-1 px-4 rounded-full">BRAND NEW</span>
				<h3 className="mt-4 text-3xl font-bold">{title}</h3>
				<p className="mt-8">Author: {authors}</p>
				<p>Publisher: {publisher}</p>
				<p>Language: {language}</p>
				<p className="flex">
					Ratings:
					{ratingStarsArr.map((ratingStar) => ratingStar)}{" "}
				</p>
				<p className="text-gray-800 mt-4">
					{descShowMore ? desc.slice(0, 150) + "..." : desc}{" "}
					<span
						onClick={() => setDescShowMore(!descShowMore)}
						className="text-blue-600 font-semibold cursor-pointer "
					>
						{descShowMore ? "show more" : "show less"}
					</span>
				</p>

                <button className="mt-8 px-6 py-3 bg-blue-500 rounded-lg text-xl font-semibold text-white hover:bg-blue-600 transition-colors duration-200 shadow-md">Buy Now</button>
                <p className="font-extrabold inline ml-6">Price: {price}</p>
			</div>
		</div>
	);
};

export default BuyBook;
