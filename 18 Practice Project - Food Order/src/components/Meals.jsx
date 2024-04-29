import MealItem from './MealItem';
import { useFetch } from '../hooks/useFetch';
import { fetchMeals } from '../http';
import Error from './Error';

export default function Meals() {
	const { isFetching, error, fetchedData } = useFetch(fetchMeals, []);

	if (error) {
		return <Error title="An error occurred!" message={error.message} />;
	}
	console.log(fetchedData);
	// Need to loop through this data and then export it back out
	return;
	// return <MealItem />;
}
