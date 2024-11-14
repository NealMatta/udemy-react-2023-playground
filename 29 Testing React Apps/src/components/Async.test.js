import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
	test('renders posts if reqeust succeeds', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ id: 'p1', title: 'First Post' }],
		});
		// Arrange
		render(<Async />);

		// Act
		// Assert
		// GetAllByRole INSTANTLY looks for the item on the screen so you can't use it for async requests while findAllByRole waits
		const listeItemElements = await screen.findAllByRole('listitem');
		expect(listeItemElements).not.toHaveLength(0);
	});
});
