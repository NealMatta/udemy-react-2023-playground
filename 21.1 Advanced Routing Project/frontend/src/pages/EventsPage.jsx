import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

// Right now, the request is only sent when you reach the eventsPage
// It works for today but is suboptimal if there are a lot of components and nested components
function EventsPage() {
	const events = useLoaderData();

	return <>{<EventsList events={events} />}</>;
}

export default EventsPage;
