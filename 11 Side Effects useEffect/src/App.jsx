import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

// Since this code runs synchronously, it just needs to be placed properly in the file
// const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
// const storedPlaces = storedIds.map((id) => AVAILABLE_PLACES.find((place) => place.id === id));

function App() {
	const modal = useRef();
	const selectedPlace = useRef();
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [pickedPlaces, setPickedPlaces] = useState([]);

	function handleStartRemovePlace(id) {
		modal.current.open();
		selectedPlace.current = id;
	}

	function handleStopRemovePlace() {
		modal.current.close();
	}

	function handleSelectPlace(id) {
		setPickedPlaces((prevPickedPlaces) => {
			if (prevPickedPlaces.some((place) => place.id === id)) {
				return prevPickedPlaces;
			}
			const place = AVAILABLE_PLACES.find((place) => place.id === id);
			return [place, ...prevPickedPlaces];
		});

		// Example of sideEffect not neeing to be in useEffect
		const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
		if (storedIds.indexOf(id) === -1) {
			localStorage.setItem('selectedPlaces', JSON.stringify(id, ...storedIds));
		}
	}

	const handleRemovePlace = useCallback(function handleRemovePlace() {
		setPickedPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current));
		modal.current.close();

		const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
		localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)));
	}, []);

	useEffect(() => {
		// This code is needed but doesn't directly impact what we see - AKA a side effect
		navigator.geolocation.getCurrentPosition((position) => {
			const sortedPlaces = sortPlacesByDistance(
				AVAILABLE_PLACES,
				position.coords.latitude,
				position.coords.longitude
			);

			setAvailablePlaces(sortedPlaces);
		});
	}, []);

	return (
		<>
			<Modal ref={modal}>
				<DeleteConfirmation onCancel={handleStopRemovePlace} onConfirm={handleRemovePlace} />
			</Modal>

			<header>
				<img src={logoImg} alt="Stylized globe" />
				<h1>PlacePicker</h1>
				<p>Create your personal collection of places you would like to visit or you have visited.</p>
			</header>
			<main>
				<Places
					title="I'd like to visit ..."
					fallbackText={'Select the places you would like to visit below.'}
					places={pickedPlaces}
					onSelectPlace={handleStartRemovePlace}
				/>
				<Places
					title="Available Places"
					places={availablePlaces}
					fallbackText="Sorting Places by distance"
					onSelectPlace={handleSelectPlace}
				/>
			</main>
		</>
	);
}

export default App;
