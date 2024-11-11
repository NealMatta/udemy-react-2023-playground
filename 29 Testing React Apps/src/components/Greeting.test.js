import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello world as a text', () => {
	// Arrange
	render(<Greeting />);
	// Act
	// Nothing in this case
	// Assert
	const helloWorldElement = screen.getByText('Greeting', { exact: true });
	expect(helloWorldElement).toBeInTheDocument();
});
