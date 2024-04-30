import MealItem from './MealItem';
import { useFetch } from '../hooks/useFetch';
import { fetchMeals } from '../http';
import Error from './Error';

export default function Meals() {
	const { isFetching, error, fetchedData } = useFetch(fetchMeals, []);

	if (error) {
		return <Error title="An error occurred!" message={error.message} />;
	}

	return (
		<div>
			<div id="meals">
				{isFetching && <div> Loading your Food </div>}
				{!isFetching &&
					fetchedData.map((meal) => {
						return (
							<MealItem
								key={meal.id}
								imgSrc={'http://localhost:3000/' + meal.image}
								title={meal.title}
								price={meal.price}
								description={meal.description}
							/>
						);
					})}
			</div>
		</div>
	);
	// return <MealItem />;
}
