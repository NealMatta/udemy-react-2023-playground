import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchEvent, deleteEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';
import Header from '../Header.jsx';

export default function EventDetails() {
	const navigate = useNavigate();
	let { id } = useParams();

	const {
		data: dataDetails,
		isLoading: isLoadingDetails,
		isError: isErrorDetails,
		error: errorDetails,
	} = useQuery({
		queryKey: ['events', id],
		queryFn: ({ signal }) => fetchEvent({ id, signal }),
	});

	let content;

	if (isLoadingDetails) {
		content = (
			<div id="event-details-content" className="center">
				<p>Fetching data</p>
			</div>
		);
	}

	if (isErrorDetails) {
		content = (
			<div id="event-details-content" className="center">
				<ErrorBlock
					title="Failed to Load Event"
					message={errorDetails.info?.message || 'Failed to fetch event details'}
				/>
			</div>
		);
	}

	const { mutate, isPending: isDeletePending } = useMutation({
		mutationFn: deleteEvent,
		onSuccess: () => {
			navigate('/events');
			queryClient.invalidateQueries({ queryKey: ['events'], refetchType: 'none' });
		},
	});

	function handleDelete() {
		mutate({ id: id });
	}
	if (dataDetails) {
		content = (
			<>
				<header>
					<h1>{dataDetails.title}</h1>
					{isDeletePending && <p>Deleting...</p>}
					{!isDeletePending && (
						<nav>
							<button onClick={handleDelete}>Delete</button>
							<Link to="edit">Edit</Link>
						</nav>
					)}
				</header>
				<div id="event-details-content">
					<img src={`http://localhost:3000/${dataDetails.image}`} alt="" />
					<div id="event-details-info">
						<div>
							<p id="event-details-location">{dataDetails.location}</p>
							<time dateTime={`Todo-DateT$Todo-Time`}>
								{dataDetails.date} @ {dataDetails.time}
							</time>
						</div>
						<p id="event-details-description">{dataDetails.description}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<Outlet />
			<Header>
				<Link to="/events" className="nav-item">
					View all Events
				</Link>
			</Header>
			<article id="event-details">{content}</article>
		</>
	);
}
