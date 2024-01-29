import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

// Setting default values helps with auto completion as you use context throughout your application
export const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	updateItemQuantity: () => {},
});

// This best practice to make sure there are no typos
const SHOPPING_CART_ACTIONS = {
	addItem: 'ADD_ITEM',
	updateItem: 'UPDATE_ITEM',
};

function shoppingCartReducer(state, action) {
	// Rather than an if statement, you can use a switch statement
	if (action.type === SHOPPING_CART_ACTIONS.addItem) {
		const updatedItems = [...state.items];

		const existingCartItemIndex = updatedItems.findIndex(
			(cartItem) => cartItem.id === action.payload
		);
		const existingCartItem = updatedItems[existingCartItemIndex];

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			const product = DUMMY_PRODUCTS.find(
				(product) => product.id === action.payload
			);
			updatedItems.push({
				id: action.payload,
				name: product.title,
				price: product.price,
				quantity: 1,
			});
		}

		return {
			...state,
			items: updatedItems,
		};
	}

	if (action.type === SHOPPING_CART_ACTIONS.updateItem) {
		const updatedItems = [...state.items];
		const updatedItemIndex = updatedItems.findIndex(
			(item) => item.id === action.payload.productId
		);

		const updatedItem = {
			...updatedItems[updatedItemIndex],
		};

		updatedItem.quantity += action.payload.amount;

		if (updatedItem.quantity <= 0) {
			updatedItems.splice(updatedItemIndex, 1);
		} else {
			updatedItems[updatedItemIndex] = updatedItem;
		}

		return {
			// It's best practice to bring in previous state before updating new ones
			...state,
			items: updatedItems,
		};
	}

	return state;
}

export default function CartContextProvider({ children }) {
	const [shoppingCartState, shoppingCartDispatch] = useReducer(
		shoppingCartReducer,
		{ items: [] }
	);

	function handleAddItemToCart(id) {
		shoppingCartDispatch({
			type: SHOPPING_CART_ACTIONS.addItem,
			payload: id,
		});
	}

	function handleUpdateCartItemQuantity(productId, amount) {
		shoppingCartDispatch({
			type: SHOPPING_CART_ACTIONS.updateItem,
			payload: {
				productId,
				amount,
			},
		});
	}

	const ctxValue = {
		items: shoppingCartState.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity,
	};

	return (
		<CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
	);
}
