import { createContext, useReducer, useState } from 'react';

// Setting default values helps with auto completion as you use context throughout your application
export const MealsContext = createContext({
	cart: [],
	addItemToCart: () => {},
	// updateItemQuantity: () => {},
});

export default function MealsProvider({ children }) {
	const [cart, setCart] = useState([]);

	function addItemToCart(meal) {
		setCart((prevItems) => [...prevItems, meal]);
	}

	const mealsValue = { cart: cart, addItemToCart: addItemToCart };

	return <MealsContext.Provider value={mealsValue}>{children}</MealsContext.Provider>;
}
