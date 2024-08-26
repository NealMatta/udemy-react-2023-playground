import { Link, redirect, useNavigate, useParams, useSubmit } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, updateEvent, queryClient } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
	const navigate = useNavigate();
	const submit = useSubmit();
	const params = useParams();

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['events', params.id],
		queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
	});

	const { mutate } = useMutation({
		mutationFn: updateEvent,
		// onMutate is executed right when you call mutate
		onMutate: async (data) => {
			// data is from the mutate parameters
			const newEvent = data.event;
			// Making sure that if we had any outgoing queries, those are cancelled first
			await queryClient.cancelQueries({ queryKey: ['events', params.id] });
			const previousEvent = queryClient.getQueryData(['events', params.id]);

			queryClient.setQueryData(['events', params.id], newEvent);

			return { previousEvent };
		},
		// Context refers to what's returned in onMutate
		onError: (error, data, context) => {
			queryClient.setQueryData(['events', params.id], context.previousEvent);
		},
		onSettled: () => {
			queryClient.invalidateQueries(['events', params.id]);
		},
	});

	function handleSubmit(formData) {
		// mutate({ id: params.id, event: formData });
		submit(formData, { method: 'PUT' });
		navigate('../');
	}

	function handleClose() {
		navigate('../');
	}

	let content;

	if (isPending) {
		content = (
			<div className="center">
				<LoadingIndicator />
			</div>
		);
	}

	if (isError) {
		content = (
			<>
				<ErrorBlock
					title="Failed to load event"
					message={
						error.info?.message || 'Failed to load event. Please check your inputs and try again later.'
					}
				/>
				<div className="form-actions">
					<Link to="../" className="button">
						Okay
					</Link>
				</div>
			</>
		);
	}

	if (data) {
		content = (
			<EventForm inputData={data} onSubmit={handleSubmit}>
				<Link to="../" className="button-text">
					Cancel
				</Link>
				<button type="submit" className="button">
					Update
				</button>
			</EventForm>
		);
	}

	return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
	return queryClient.fetchQuery({
		queryKey: ['events', params.id],
		queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
	});
}

// Request and Params passed in automatically
export async function action({ request, params }) {
	const formData = await request.formData();
	const updatedEventData = Object.fromEntries(formData);
	await updateEvent({ id: params.id, event: updatedEventData });
	await queryClient.invalidateQueries(['events']);

	return redirect('../');
}
