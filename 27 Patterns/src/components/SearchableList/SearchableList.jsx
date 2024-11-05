import { useRef, useState } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {
	const lastChange = useRef();
	const [searchTerm, setSearchTerm] = useState('');

	const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));
	function handleChange(event) {
		// If we have an ongoing timer, then we clear it
		if (lastChange.current) {
			clearTimeout(lastChange.current);
		}

		lastChange.current = setTimeout(() => {
			lastChange.current = null;
			setSearchTerm(event.target.value);
		}, 500);
	}

	return (
		<div className="searchable-list">
			<input type="search" placeholder="Search" onChange={handleChange} />
			<ul>
				{searchResults.map((item) => (
					// Calling this as a function because you want different text for every item
					<li key={itemKeyFn(item)}> {children(item)} </li>
				))}
			</ul>
		</div>
	);
}
