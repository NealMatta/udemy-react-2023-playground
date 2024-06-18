import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	// Example of programatic navigation
	function navigateHandler() {
		navigate('/products');
	}
	return (
		<>
			<h1>My Home</h1>
			<p>
				Go to the <Link to="/products"> list of products</Link>
			</p>
			<p>
				<button onClick={navigateHandler}>navigate</button>
			</p>
		</>
	);
}
