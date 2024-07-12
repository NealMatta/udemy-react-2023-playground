import { useNavigate, Form, useNavigation, useActionData, json, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
	// I can use the action data here because this component is rendered by the page component that uses the action data
	const data = useActionData();

	const navigate = useNavigate();
	const navigation = useNavigation();
	// Using the useNavigation function lets me understand where in my form the process is which then leads to better UI experience
	const isSubmitting = navigation.state === 'submitting';
	function cancelHandler() {
		navigate('..');
	}

	return (
		<Form method={method} className={classes.form}>
			{data && data.errors && (
				<ul>
					{Object.values(data.errors).map((err) => (
						<li key={err}>{err}</li>
					))}
				</ul>
			)}
			<p>
				<label htmlFor="title">Title</label>
				<input id="title" type="text" name="title" required defaultValue={event && event.title} />
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input id="image" type="url" name="image" required defaultValue={event && event.image} />
			</p>
			<p>
				<label htmlFor="date">Date</label>
				<input id="date" type="date" name="date" required defaultValue={event && event.date} />
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows="5"
					required
					defaultValue={event && event.description}
				/>
			</p>
			<div className={classes.actions}>
				<button type="button" onClick={cancelHandler} disabled={isSubmitting}>
					Cancel
				</button>
				<button disabled={isSubmitting}>{isSubmitting ? 'Is Submitting' : 'Save'}</button>
			</div>
		</Form>
	);
}

export default EventForm;

export async function action({ request, params }) {
	const method = request.method;
	const formData = await request.formData();
	const eventData = {
		title: formData.get('title'),
		image: formData.get('image'),
		date: formData.get('date'),
		description: formData.get('description'),
	};

	let url = 'http://localhost:8080/events';
	if (method === 'PATCH') {
		// Need to use params.eventId because eventId is used in the route definitions
		const eventId = params.eventId;
		url = 'http://localhost:8080/events/' + eventId;
	}

	const response = await fetch(url, {
		method: method,
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
