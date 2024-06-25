import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
	// Gives you the ability to grab the id you assigned
	const params = useParams();

	return (
		<>
			<h1>ProductDetail</h1>
			<p>{params.productId}</p>
			{/* Goes back to the parent page via the route definitions */}
			<p>
				<Link to="..">Back</Link>
			</p>
		</>
	);
}
