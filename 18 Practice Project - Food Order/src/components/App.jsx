import { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Modal from './components/Modal';
import CartModalContent from './components/CartModalContent';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// const [isFormOpen, setIsFormOpene] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<CartModalContent />
			</Modal>
			<Header openModal={openModal} />
			<Meals />
		</>
	);
}

export default App;
