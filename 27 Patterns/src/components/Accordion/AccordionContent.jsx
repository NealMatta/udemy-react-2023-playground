import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export default function AccordionContent({ className, children }) {
	const { openItemId } = useAccordionContext();
	const id = useAccordionItemContext();
	console.log(id);

	const isOpen = openItemId === id;

	return <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>{children}</div>;
}
