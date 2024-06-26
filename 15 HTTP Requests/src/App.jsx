import { useRef, useState, useCallback } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import Error from './components/Error.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUserPlaces } from './http.js';

function App() {
	const selectedPlace = useRef();

	const [userPlaces, setUserPlaces] = useState([]);
	const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleStartRemovePlace(place) {
		setModalIsOpen(true);
		selectedPlace.current = place;
	}

	function handleStopRemovePlace() {
		setModalIsOpen(false);
	}

	async function handleSelectPlace(selectedPlace) {
		setUserPlaces((prevPickedPlaces) => {
			if (!prevPickedPlaces) {
				prevPickedPlaces = [];
			}
			if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
				return prevPickedPlaces;
			}
			return [selectedPlace, ...prevPickedPlaces];
		});

		try {
			// Need to do this because state updates aren't immediate
			await updateUserPlaces([selectedPlace, ...userPlaces]);
		} catch (error) {
			// Rolling back the change if the database fails for whatever reason
			setUserPlaces(userPlaces);
			setErrorUpdatingPlaces({ message: error.message || "Trouble updating the user's places" });
		}
	}

	const handleRemovePlace = useCallback(async function handleRemovePlace() {
		setUserPlaces((prevPickedPlaces) => prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id));

		setModalIsOpen(false);
	}, []);

	function handleError() {
		setErrorUpdatingPlaces(null);
	}

	return (
		<>
			<Modal open={errorUpdatingPlaces} onClose={handleError}>
				{errorUpdatingPlaces && (
					<Error
						title={'Something Error Ocurred'}
						message={errorUpdatingPlaces.message}
						onConfirm={handleError}
					/>
				)}
			</Modal>
			<Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
					fallbackText="Select the places you would like to visit below."
					places={userPlaces}
					onSelectPlace={handleStartRemovePlace}
				/>

				<AvailablePlaces onSelectPlace={handleSelectPlace} />
			</main>
		</>
	);
}

export default App;
