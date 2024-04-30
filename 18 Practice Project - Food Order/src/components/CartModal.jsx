import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function CartModal({ isOpen, children, onClose }) {
	const dialog = useRef(null);

	useEffect(() => {
		if (isOpen) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [isOpen]);

	return createPortal(
		<dialog className="modal" ref={dialog} onClose={onClose}>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
}
