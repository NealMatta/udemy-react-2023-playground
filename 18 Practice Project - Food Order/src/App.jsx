import { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Modal from './components/Modal';
import CartModalContent from './components/CartModalContent';
import FormModalContent from './components/FormModalContent';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(true);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<FormModalContent />
			</Modal>
			<Header openModal={openModal} />
			<Meals />
		</>
	);
}

export default App;
