import { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

// Custom hook
export function useAccordionContext() {
	const ctx = useContext(AccordionContext);

	if (!ctx) {
		throw new Error('Accordion-related components must be wrapped by <Accordion>');
	}

	return ctx;
}

// This is essentially the provider
export default function Accordion({ children, className }) {
	const [openItemId, setOpenItemId] = useState();
	function openItem(id) {
		setOpenItemId(id);
	}

	function closeItem() {
		setOpenItemId(null);
	}

	const contextValues = {
		openItemId,
		openItem,
		closeItem,
	};

	return (
		<AccordionContext.Provider value={contextValues}>
			<ul className={className}>{children}</ul>
		</AccordionContext.Provider>
	);
}
