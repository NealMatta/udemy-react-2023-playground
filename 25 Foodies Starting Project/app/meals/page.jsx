// Suspense allows you to handle loading state and fallback content
import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
	const meals = getMeals();
	return <MealsGrid meals={meals} />;
}

// Server components can be functions that use promises
export default async function Home() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious Meals, Created <span className={classes.highlight}>by you</span>
				</h1>
				<p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share your Favorite Recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}>Fetching Meals</p>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
