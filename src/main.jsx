import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import BuyBook from "./BuyBook";
import About from "./components/About";
import Books from "./components/Books";
import Home from "./components/Home";
import Meals from "./components/Meals";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/books",
				element: <Books />,
				loader: () => fetch(`https://api.itbook.store/1.0/new`),
			},
			{
				path: "/books/:id",
				element: <BuyBook />,
				loader: ({ params }) =>
					fetch(`https://api.itbook.store/1.0/books/${params.id}`),
			},
			{ path: "/meals", element: <Meals />, loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)},
			{ path: "/about", element: <About /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
