import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

// Right now, the request is only sent when you reach the eventsPage
// It works for today but is suboptimal if there are a lot of components and nested components
function EventsPage() {
	const data = useLoaderData();

	// return <>{<EventsList events={events} />}</>;
	// Suspense is used as a fallback as Await is waiting for the events to be fetched
	return (
		<Suspense fallback={<p style={{ textAlign: 'center' }}>loading...</p>}>
			<Await resolve={data.events}>{(loadEvents) => <EventsList events={loadEvents} />}</Await>
		</Suspense>
	);
}

export default EventsPage;

async function loadEvents() {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		// throw Error('Could not fetch event');
		// Need to use response instead of error to add an error status code
		// throw new Response(JSON.stringify({ message: 'Could not fetch events' }), { status: 500 });

		// A cleaner and easier way to throw code
		throw json({ message: 'Could not fetch events' }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.events;
		// return response;
	}
}

// This executes in the browser, not the server
// Loader is not a react component so it cannot use hooks
export async function loader() {
	return defer({
		events: loadEvents(), // Needs to return a promise
	});
}
