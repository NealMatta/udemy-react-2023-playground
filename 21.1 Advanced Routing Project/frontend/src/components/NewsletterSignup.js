import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';

function NewsletterSignup() {
	// Basically trigger an action without navigating to a page where the loader/action belongs
	const fetcher = useFetcher();
	// State tells you whether the fetcher completed the action that was triggered
	const { data, state } = fetcher;

	useEffect(() => {
		if (state === 'idle' && data && data.message) {
			window.alert(data.message);
		}
	}, [data, state]);

	return (
		<fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
			<input type="email" placeholder="Sign up for newsletter..." aria-label="Sign up for newsletter" />
			<button>Sign up</button>
		</fetcher.Form>
	);
}

export default NewsletterSignup;
