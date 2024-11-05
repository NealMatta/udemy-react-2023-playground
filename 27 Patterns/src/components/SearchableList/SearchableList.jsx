import { useState } from 'react';

export default function SearchableList({ items, itemKeyFn, children }) {
	const [searchTerm, setSearchTerm] = useState('');

	const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));
	function handleChange(event) {
		setSearchTerm(event.target.value);
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
