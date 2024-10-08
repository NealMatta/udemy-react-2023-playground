import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent } from '../../util/http.js';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';

export default function NewEvent() {
	const navigate = useNavigate();

	// mutate is a function that you can use to call anywhere in the function
	// In comparison, useQuery automatially sends a request
	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: createNewEvent,
		// Executes once mutation succeeds
		onSuccess: () => {
			navigate('/events');
			queryClient.invalidateQueries({ queryKey: ['events'] });
		},
	});

	function handleSubmit(formData) {
		mutate({ event: formData });
	}

	return (
		<Modal onClose={() => navigate('../')}>
			<EventForm onSubmit={handleSubmit}>
				{isPending && 'Submitting...'}
				{!isPending && (
					<>
						<Link to="../" className="button-text">
							Cancel
						</Link>
						<button type="submit" className="button">
							Create
						</button>
					</>
				)}
			</EventForm>
			{isError && (
				<ErrorBlock title="Failed to create event" message={error.info?.message || 'Error happened pls'} />
			)}
		</Modal>
	);
}
