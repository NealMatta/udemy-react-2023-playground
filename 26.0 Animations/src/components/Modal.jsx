import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
	return createPortal(
		<>
			<div className="backdrop" onClick={onClose} />
			<motion.dialog
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: { opacity: 1, y: 0 },
				}}
				className="modal"
				// Initial lets you set the starting state and if you deviate from the state, the animate is played
				initial="hidden"
				animate="visible"
				exit="hidden"
				open
			>
				<h2>{title}</h2>
				{children}
			</motion.dialog>
		</>,
		document.getElementById('modal')
	);
}
