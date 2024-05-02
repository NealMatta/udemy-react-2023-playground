import { createContext, useReducer, useState } from 'react';

// Setting default values helps with auto completion as you use context throughout your application
export const MealsContext = createContext({
	cart: [],
	cartDetails: {},
	// Quantity and Price are stored here
	addItemToCart: () => {},
	removeItemFromCart: () => {},
});

export default function MealsProvider({ children }) {
	const [cart, setCart] = useState([]);
	const [cartDetails, setCartDetails] = useState({ quantity: 0, price: 0 });

	function addItemToCart(inputMeal) {
		// Check if the meal isn't in the cart
		const mealIndex = cart.findIndex((meal) => meal.id === inputMeal.id);

		// If item exists, update it
		if (mealIndex !== -1) {
			setCart((prevMeals) => {
				const updatedCart = [...prevMeals];
				// Increment the quantity of the existing meal
				updatedCart[mealIndex] = { ...updatedCart[mealIndex], quantity: updatedCart[mealIndex].quantity + 1 };
				return updatedCart;
			});
		} else {
			const newMeal = {
				id: inputMeal.id,
				name: inputMeal.name,
				price: inputMeal.price,
				quantity: 1,
			};

			// Add the new meal to the cart
			setCart((prevMeals) => [...prevMeals, newMeal]);
		}
		setCartDetails((prevDetails) => ({
			...prevDetails,
			price: prevDetails.price + Number(inputMeal.price),
			quantity: prevDetails.quantity + 1,
		}));
	}

	function removeItemFromCart(inputMeal) {
		// Check if the meal isn't in the cart
		const mealIndex = cart.findIndex((meal) => meal.id === inputMeal.id);

		// If item exists, update it
		if (inputMeal.quantity !== 1) {
			setCart((prevMeals) => {
				const updatedCart = [...prevMeals];
				// Decrement the quantity of the existing meal
				updatedCart[mealIndex] = { ...updatedCart[mealIndex], quantity: updatedCart[mealIndex].quantity - 1 };
				return updatedCart;
			});
		} else {
			// Remove the meal from the cart completely
			setCart((prevMeals) => prevMeals.filter((meal) => meal.id !== inputMeal.id));
		}
		setCartDetails((prevDetails) => ({
			...prevDetails,
			price: prevDetails.price - Number(inputMeal.price),
			quantity: prevDetails.quantity - 1,
		}));
	}

	const mealsValue = {
		cart,
		cartDetails,
		addItemToCart,
		removeItemFromCart,
	};

	return <MealsContext.Provider value={mealsValue}>{children}</MealsContext.Provider>;
}
