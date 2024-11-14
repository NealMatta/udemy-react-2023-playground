import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting Component', () => {
	test('renders greeting as a text', () => {
		// Arrange
		render(<Greeting />);
		// Act
		// Nothing in this case
		// Assert
		const helloWorldElement = screen.getByText('Greeting', { exact: true });
		expect(helloWorldElement).toBeInTheDocument();
	});

	test(`renders "It's good to see you" if the button was NOT clicked`, () => {
		render(<Greeting />);
		const outputElement = screen.getByText(`It's good to see you`, { exact: true });
		expect(outputElement).toBeInTheDocument();
	});

	test('renders "Changed" if the button WAS clicked', () => {
		render(<Greeting />);

		// only works if there's one button
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const outputElement = screen.getByText(`Changed`);
		expect(outputElement).toBeInTheDocument();
	});

	test('does not render "good to see you" if the button was clicked', () => {
		render(<Greeting />);

		// only works if there's one button
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const outputElement = screen.queryByText(`It's good to see you`);
		expect(outputElement).toBeNull();
	});
});
