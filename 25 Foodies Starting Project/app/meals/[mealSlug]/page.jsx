import Link from 'next/link';

export default function MealDetailsPage({ params }) {
	return (
		<>
			<h1>MealDetailsPage</h1>
			<p>{params.mealSlug}</p>
		</>
	);
}
