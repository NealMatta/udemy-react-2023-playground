import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchEvents } from '../../util/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from '../Events/EventItem';

export default function FindEventSection() {
	const searchElement = useRef();
	const [searchTerm, setSearchTerm] = useState();

	const { data, isLoading, isError, error } = useQuery({
		// By constructing a query key dynamically, React Query can cache and reuse different data for different keys based on the same query
		queryKey: ['events', { search: searchTerm }],
		queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
		enabled: searchTerm !== undefined,
	});

	function handleSubmit(event) {
		event.preventDefault();
		setSearchTerm(searchElement.current.value);
	}

	let content = <p>Please enter a search term and to find events.</p>;

	if (isLoading) {
		content = <LoadingIndicator />;
	}

	if (isError) {
		content = <ErrorBlock title="An Error Occurred" message={error.info?.message || 'Failed to fetch events'} />;
	}

	if (data) {
		content = (
			<ul className="events-list">
				{data.map((event) => (
					<li key={event.id}>
						<EventItem event={event} />
					</li>
				))}
			</ul>
		);
	}

	return (
		<section className="content-section" id="all-events-section">
			<header>
				<h2>Find your next event!</h2>
				<form onSubmit={handleSubmit} id="search-form">
					<input type="search" placeholder="Search events" ref={searchElement} />
					<button>Search</button>
				</form>
			</header>
			{content}
		</section>
	);
}
