import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);

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

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
