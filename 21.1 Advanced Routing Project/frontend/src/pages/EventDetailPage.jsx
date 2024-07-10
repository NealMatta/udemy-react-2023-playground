import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
	const data = useRouteLoaderData('event-detail');

	return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
	// Request can be used to access query parameters

	const id = params.eventId;
	const response = await fetch('http://localhost:8080/events/' + id);

	if (!response.ok) {
		throw json({ message: 'Could not fetch details for selected event' }, { status: 500 });
	} else {
		return response;
	}
}

// The action we're adding here is used on the EventItem Page
// We're not including it on the eventItem page since that isn't a route

export async function action({ request, params }) {
	const id = params.eventId;
	const response = await fetch('http://localhost:8080/events/' + id, {
		method: request.method, // Pulling from eventItem
	});

	if (!response.ok) {
		throw json({ message: 'Could not delete selected event' }, { status: 500 });
	}

	return redirect('/events');
}
