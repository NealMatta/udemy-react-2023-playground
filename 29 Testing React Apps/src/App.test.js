import { render, screen } from '@testing-library/react';
import App from './App';

// First argument is a description of the test and the second argument is an anonymous function that runs when the test is executed
test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
