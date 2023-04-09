import React from "react";
import Book from "./Book"
import { useLoaderData } from "react-router-dom";

const Books = () => {
	const { books } = useLoaderData();
	console.log(books);
	return (
		<div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-12">
			{books.map((book) => (
				<Book key={book.isbn13} book={book} />
			))}
		</div>
	);
};


export default Books;
