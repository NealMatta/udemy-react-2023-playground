import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(false);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState();

	/* Using .then 
	useEffect(() => {
		// Calling this in the function sets off an infinite loop. That's why you need to execute in a useEffect hook
		fetch('http://localhost:3000/places')
			.then((response) => {
				return response.json();
			})
			.then((resData) => {
				setAvailablePlaces(resData.places);
			});
	}, []);
	*/

	// Using Asnyc/Await
	// Standard way to grab data while also using errors and loading
	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);

			try {
				const response = await fetch('http://localhost:3000/places');
				const resData = await response.json();

				if (!response.ok) {
					throw new Error('Failed to fetch places');
				}

				// Can't use asnyc await because it doesn't yield a promise
				navigator.geolocation.getCurrentPosition((position) => {
					const sortedPlaces = sortPlacesByDistance(
						resData.places,
						position.coords.latitude,
						position.coords.longitude
					);
					setIsFetching(false);
					setAvailablePlaces(sortedPlaces);
				});
			} catch (error) {
				setError({ message: error.message || 'Shit went wrong' });
				setIsFetching(false);
			}
		}

		fetchPlaces();
	}, []);

	if (error) {
		return <Error title={'An Error occurred'} message={error.message} />;
	}

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isFetching}
			loadingText="Loading... "
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
