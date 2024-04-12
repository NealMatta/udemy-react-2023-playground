// Utility function to get back error or places
export async function fetchAvailablePlaces() {
	const response = await fetch('http://localhost:3000/places');
	const resData = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch places');
	}

	return resData.places;
}

// Updating user places
// - Grabs places from user and uploads them to database
export async function updateUserPlaces(places) {
	const response = fetch('http://localhost:3000/user-places', {
		method: 'PUT',
		body: JSON.stringify({ places: places }),
		headers: {
			// Required to make sure data is extracted succesfully from the backend
			'Content-Type': 'application/json',
		},
	});
	const resData = await response.json();

	if (!response.ok) {
		throw new Error('Failsed to update User Data');
	}

	return resData.message;
}
