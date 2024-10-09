import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
	return createPortal(
		<>
			<div className="backdrop" onClick={onClose} />
			<motion.dialog
				open
				className="modal"
				// Initial lets you set the starting state and if you deviate from the state, the animate is played
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
			>
				<h2>{title}</h2>
				{children}
			</motion.dialog>
		</>,
		document.getElementById('modal')
	);
}
