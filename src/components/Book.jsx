import React from "react";
import { useNavigate } from "react-router-dom";

const Book = (props) => {
	const { image, title, url, subtitle, price, isbn13 } = props.book;
    const navigate = useNavigate();

    const buyBook = () => {
        navigate(`/books/${isbn13}`)
    }
	return (
		<div className="shadow-md rounded-lg overflow-hidden relative">
			<img className="w-full h-full" src={image} alt="" />
            <div onClick={buyBook} className="flex flex-col p-8 absolute inset-0 bg-black text-gray-300 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="mt-4 text-lg">{subtitle.slice(0, 200)+ "..."}</p>
                <p className="mt-auto">{price}</p>
            </div>
		</div>
	);
};

export default Book;
