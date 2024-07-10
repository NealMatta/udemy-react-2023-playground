import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function NewEventPage() {
	return <EventForm />;
}

export async function action({ request, params }) {
	const formData = await request.formData();
	const eventData = {
		title: formData.get('title'),
		image: formData.get('image'),
		date: formData.get('date'),
		description: formData.get('description'),
	};

	const response = await fetch('http://localhost:8080/events', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	});

	// Backend response error validation status code
	if (response.status === 422) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: 'Could not save event.' }, { status: 500 });
	}

	return redirect('/events');
}
