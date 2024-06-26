import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

// Right now, the request is only sent when you reach the eventsPage
// It works for today but is suboptimal if there are a lot of components and nested components
function EventsPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [fetchedEvents, setFetchedEvents] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		async function fetchEvents() {
			setIsLoading(true);
			// const response = await fetch('http://localhost:8080/events');

			// if (!response.ok) {
			// 	setError('Fetching events failed.');
			// } else {
			// 	const resData = await response.json();
			// 	setFetchedEvents(resData.events);
			// }
			setIsLoading(false);
		}

		fetchEvents();
	}, []);
	return (
		<>
			<div style={{ textAlign: 'center' }}>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
			</div>
			{!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
		</>
	);
}

export default EventsPage;
