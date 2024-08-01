import { redirect } from 'react-router-dom';

// We're using this file to register an action with no component so that we can still leverage actions in react router dom
export function action() {
	localStorage.removeItem('token');
	return redirect('/');
}
