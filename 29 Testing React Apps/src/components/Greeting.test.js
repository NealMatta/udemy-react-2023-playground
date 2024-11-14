import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
	test('renders hello world as a text', () => {
		// Arrange
		render(<Greeting />);
		// Act
		// Nothing in this case
		// Assert
		const helloWorldElement = screen.getByText('Hello World', { exact: true });
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders greeting as a text', () => {
		// Arrange
		render(<Greeting />);
		// Act
		// Nothing in this case
		// Assert
		const helloWorldElement = screen.getByText('Greeting', { exact: true });
		expect(helloWorldElement).toBeInTheDocument();
	});
});
