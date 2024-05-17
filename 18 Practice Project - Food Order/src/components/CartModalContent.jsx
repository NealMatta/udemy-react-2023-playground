import { useContext } from 'react';
import { MealsContext } from '../store/meals-context';

export default function CartModalContent() {
	const { cart, cartDetails, addItemToCart, removeItemFromCart } = useContext(MealsContext);
	// Can use the reduce function rather than creating a separate state
	const { price } = cartDetails;
	return (
		<section className="cart">
			<h2>Your Cart</h2>
			<ul>
				{cart &&
					cart.map((meal) => {
						return (
							<li className="cart-item" key={meal.id}>
								<p>
									{/* Not so sure about quantity */}
									{meal.name} - {meal.quantity}x ${meal.price}
								</p>
								<div className="cart-item-actions">
									<button
										onClick={() => {
											removeItemFromCart(meal);
										}}
									>
										-
									</button>
									<p>{meal.quantity}</p>
									<button onClick={() => addItemToCart(meal)}>+</button>
								</div>
							</li>
						);
					})}
			</ul>
			<div className="cart-total">${price.toFixed(2)}</div>
		</section>
	);
}
