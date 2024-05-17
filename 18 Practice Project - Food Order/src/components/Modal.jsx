import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, children, onClose, callToAction }) {
	const dialog = useRef(null);

	useEffect(() => {
		if (isOpen) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
		// Should have used a clean up function instead
	}, [isOpen]);

	return createPortal(
		<dialog className="modal" ref={dialog} onClose={onClose}>
			{children}
			<div className="modal-actions">
				{/* I could've passed in different text here to make the actions work perfectly */}
				<button onClick={onClose} className="text-button">
					Close
				</button>
				<button onClick={callToAction} className="button">
					Go to Checkout
				</button>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
}
