import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

// Right now, the request is only sent when you reach the eventsPage
// It works for today but is suboptimal if there are a lot of components and nested components
function EventsPage() {
	const data = useLoaderData();
	const events = data.events;

	return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

// This executes in the browser, not the server
// Loader is not a react component so it cannot use hooks
export async function loader() {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		// throw Error('Could not fetch event');
		// Need to use response instead of error to add an error status code
		// throw new Response(JSON.stringify({ message: 'Could not fetch events' }), { status: 500 });

		// A cleaner and easier way to throw code
		throw json({ message: 'Could not fetch events' }, { status: 500 });
	} else {
		// const resData = await response.json();
		// return resData.events;
		return response;
	}
}
