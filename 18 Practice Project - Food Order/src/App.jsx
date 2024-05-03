import { useState } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Modal from './components/Modal';
import CartModalContent from './components/CartModalContent';
import FormModalContent from './components/FormModalContent';
import SuccessModalContent from './components/SuccessModalContent';

import MealsProvider from './store/meals-context';
import useModal from './hooks/useModal';

function App() {
	const cartModal = useModal();
	const formModal = useModal();
	const submitModal = useModal();

	function cartModalCTA() {
		cartModal.closeModal();
		formModal.openModal();
	}

	function formModalCTA() {
		formModal.closeModal();
		submitModal.openModal();
	}

	return (
		<>
			<MealsProvider>
				<Modal isOpen={cartModal.isOpen} onClose={cartModal.closeModal} callToAction={cartModalCTA}>
					<CartModalContent />
				</Modal>
				<Modal isOpen={formModal.isOpen} onClose={formModal.closeModal} callToAction={formModalCTA}>
					<FormModalContent />
				</Modal>
				<Modal isOpen={submitModal.isOpen} onClose={submitModal.closeModal}>
					<SuccessModalContent />
				</Modal>

				<Header openModal={cartModal.openModal} />
				<Meals />
			</MealsProvider>
		</>
	);
}

export default App;
