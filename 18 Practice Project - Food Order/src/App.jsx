import { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Modal from './components/Modal';
import CartModalContent from './components/CartModalContent';
import FormModalContent from './components/FormModalContent';
import MealsProvider from './store/meals-context';

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
			<MealsProvider>
				<Modal isOpen={isModalOpen} onClose={closeModal}>
					<CartModalContent />
				</Modal>
				<Header openModal={openModal} />
				<Meals />
			</MealsProvider>
		</>
	);
}

export default App;
