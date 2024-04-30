import { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import CartModal from './components/CartModal';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<CartModal isOpen={isModalOpen} onClose={closeModal}>
				{/* Content inside the modal */}
				<h2>Modal Content</h2>
				<p>This is the content of the modal.</p>
				<button onClick={closeModal}>Close</button>
			</CartModal>
			<Header openModal={openModal} />
			<Meals />
		</>
	);
}

export default App;
