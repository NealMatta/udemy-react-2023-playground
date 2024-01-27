import { createContext } from 'react';

// Setting default values helps with auto completion as you use context throughout your application
export const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	updateItemQuantity: () => {},
});
